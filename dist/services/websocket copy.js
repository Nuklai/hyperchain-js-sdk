import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt } from '../constants/consts';
export function isNodeEnvironment() {
    return (typeof process !== 'undefined' &&
        typeof window === 'undefined' &&
        ((process.versions != null && typeof process.versions.node === 'string') ||
            (process.release != null && process.release.name === 'node') ||
            process.title === 'node' ||
            typeof require === 'function'));
}
let WebSocketImpl;
async function loadWebSocketImpl() {
    console.log("typeof window !== 'undefined' && 'WebSocket' in window:", typeof window !== 'undefined' && 'WebSocket' in window);
    if (typeof window !== 'undefined' && 'WebSocket' in window) {
        WebSocketImpl = (await import('ws')).default;
    }
    else {
        WebSocketImpl = WebSocket;
    }
}
export class WebSocketService {
    ws;
    pendingBlocks = [];
    pendingTxs = [];
    closed = false;
    constructor(config) {
        this.initialize(config);
    }
    async initialize(config) {
        await loadWebSocketImpl();
        // TODO: get the websocket url from the config
        this.ws = new WebSocketImpl(this.getWebSocketUri(config.baseApiUrl));
    }
    async connect() {
        this.ws.onopen = () => {
            console.log('WebSocket connection opened.');
        };
        this.ws.onmessage = (event) => {
            this.handleMessage(event.data);
        };
        this.ws.onclose = () => {
            this.closed = true;
            console.log('WebSocket connection closed.');
        };
        this.ws.onerror = (err) => {
            console.error('WebSocket error:', err);
        };
    }
    getWebSocketUri(apiUrl) {
        let uri = apiUrl.replace(/^http/, 'ws');
        uri = uri.endsWith('/') ? uri : `${uri}/`;
        uri += 'ws';
        return uri;
    }
    handleMessage(data) {
        const msg = new Uint8Array(data);
        const messageType = msg[0];
        const message = msg.slice(1);
        switch (messageType) {
            case 0: // BlockMode
                this.pendingBlocks.push(message);
                break;
            case 1: // TxMode
                this.pendingTxs.push(message);
                break;
            default:
                console.warn('Unexpected WebSocket message type:', messageType);
        }
    }
    async registerBlocks() {
        if (this.closed)
            throw new Error('WebSocket is closed.');
        this.ws.send(JSON.stringify({ type: 'register', messageType: 'block' }));
    }
    async registerTx(tx) {
        if (this.closed)
            throw new Error('WebSocket is closed.');
        this.ws.send(JSON.stringify({
            type: 'register',
            messageType: 'tx',
            data: tx.toBytes()
        }));
    }
    async listenBlock(actionRegistry, authRegistry) {
        if (this.closed)
            throw new Error('WebSocket is closed.');
        return new Promise((resolve, reject) => {
            const message = this.pendingBlocks.shift();
            if (!message) {
                return reject(new Error('No block messages available.'));
            }
            let codec = Codec.newReader(message, MaxInt);
            const blkMessage = codec.unpackBytes(true);
            const [block, c] = StatefulBlock.fromBytes(blkMessage, actionRegistry, authRegistry);
            if (c.getError()) {
                return reject(c.getError());
            }
            codec = c;
            const resultsMessage = codec.unpackBytes(true);
            const [results, errResults] = Result.resultsFromBytes(resultsMessage);
            if (errResults) {
                return reject(errResults);
            }
            const pricesMessage = codec.unpackFixedBytes(DimensionsLen);
            const [prices, errMessage] = dimensionFromBytes(pricesMessage);
            if (errMessage) {
                return reject(errMessage);
            }
            if (!codec.empty()) {
                return reject(new Error('Invalid object'));
            }
            resolve([block, results, prices]);
        });
    }
    async listenTx() {
        if (this.closed)
            throw new Error('WebSocket is closed.');
        return new Promise((resolve, reject) => {
            const message = this.pendingTxs.shift();
            if (!message) {
                return reject(new Error('No transaction messages available.'));
            }
            const codec = Codec.newReader(message, MaxInt);
            const txId = codec.unpackID(true);
            const hasError = codec.unpackBool();
            if (hasError) {
                const error = new Error(codec.unpackString(true));
                return resolve([txId, error, undefined, undefined]);
            }
            const [result, err] = Result.fromBytes(codec);
            if (err) {
                return reject(err);
            }
            resolve([txId, undefined, result, codec.getError()]);
        });
    }
    async close() {
        if (this.closed)
            return;
        this.ws.close();
    }
    isClosed() {
        return this.closed;
    }
}
//# sourceMappingURL=websocket%20copy.js.map