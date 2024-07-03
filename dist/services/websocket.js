import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt } from '../constants/consts';
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints';
import { getWebSocketClient, loadWebSocketClient } from './ws/client';
export class WebSocketService {
    websocketURL;
    ws;
    pendingBlocks = [];
    pendingTxs = [];
    closed = false;
    constructor(config) {
        this.websocketURL = this.getWebSocketUri(config.baseApiUrl);
    }
    async connect() {
        await loadWebSocketClient();
        const WebSocketClient = getWebSocketClient();
        // TODO: get the websocket url from the config
        this.ws = new WebSocketClient(this.websocketURL);
        this.ws.onopen = () => {
            console.log('WebSocket connection opened.');
        };
        this.ws.onmessage = async (event) => {
            await this.handleMessage(event.data);
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
        let uri = apiUrl.replace(/http:\/\//g, 'ws://');
        uri = uri.replace(/https:\/\//g, 'wss://');
        if (!uri.startsWith('ws')) {
            // fallback to default usage
            uri = 'ws://' + uri;
        }
        uri = uri.replace(/\/$/, '');
        uri += `/${WEBSOCKET_ENDPOINT}`;
        return uri;
    }
    async handleMessage(data) {
        let message;
        if (typeof Blob !== 'undefined' && data instanceof Blob) {
            const arrayBuffer = await data.arrayBuffer();
            message = new Uint8Array(arrayBuffer);
        }
        else if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
            message = new Uint8Array(data);
        }
        else if (data instanceof ArrayBuffer) {
            message = new Uint8Array(data);
        }
        else if (typeof data === 'string') {
            message = new Uint8Array(Buffer.from(data));
        }
        else {
            throw new Error(`Unsupported WebSocket message type: ${typeof data}`);
        }
        const messageType = message[0];
        const messageContent = message.slice(1);
        switch (messageType) {
            case 0: // BlockMode
                this.pendingBlocks.push(messageContent);
                break;
            case 1: // TxMode
                this.pendingTxs.push(messageContent);
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
//# sourceMappingURL=websocket.js.map