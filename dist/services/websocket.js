import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt } from '../constants/consts';
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints';
import { getWebSocketClient, loadWebSocketClient } from './ws/client';
export class WebSocketService {
    uri;
    ws;
    pendingBlocks = [];
    pendingTxs = [];
    isOpen = false;
    constructor(config) {
        this.uri = this.getWebSocketUri(config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`);
    }
    async connect() {
        await loadWebSocketClient();
        const WebSocketClient = getWebSocketClient();
        this.ws = new WebSocketClient(this.uri);
        return new Promise((resolve, reject) => {
            this.ws.onopen = () => {
                console.log('WebSocket connection opened.');
                this.isOpen = true;
                resolve();
            };
            this.ws.onmessage = async (event) => {
                console.log('Received message from WebSocket:', event.data);
                await this.handleMessage(event.data);
            };
            this.ws.onclose = () => {
                this.isOpen = false;
                console.log('WebSocket connection closed.');
            };
            this.ws.onerror = (err) => {
                console.error('WebSocket error:', err);
                reject(err);
            };
        });
    }
    getWebSocketUri(apiUrl) {
        let uri = apiUrl.replace(/http:\/\//g, 'ws://');
        uri = uri.replace(/https:\/\//g, 'wss://');
        if (!uri.startsWith('ws')) {
            // fallback to default usage
            uri = 'ws://' + uri;
        }
        uri = uri.replace(/\/$/, '');
        return uri;
    }
    async handleMessage(data) {
        console.log('Unparsed WebSocket message:', data);
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
        console.log('Parsed WebSocket message:', message);
        const messageType = message[0];
        const messageContent = message.slice(1);
        switch (messageType) {
            case 0: // BlockMode
                console.log('Received BlockMode message');
                this.pendingBlocks.push(messageContent);
                break;
            case 1: // TxMode
                console.log('Received TxMode message');
                this.pendingTxs.push(messageContent);
                break;
            default:
                console.warn('Unexpected WebSocket message type:', messageType);
        }
    }
    async registerBlocks() {
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
        console.log('Registering for block updates...');
        this.ws.send(JSON.stringify({ type: 'register', messageType: 'block' }));
    }
    async registerTx(tx) {
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
        const txBytes = tx.toBytes();
        console.log('Registering transaction:', txBytes);
        this.ws.send(JSON.stringify({
            type: 'register',
            messageType: 'tx',
            data: txBytes
        }));
    }
    async listenBlock(actionRegistry, authRegistry) {
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
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
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
        return new Promise((resolve, reject) => {
            const message = this.pendingTxs.shift();
            console.log('Received transaction message:', message);
            if (!message) {
                return reject(new Error('No transaction messages available.'));
            }
            const codec = Codec.newReader(message, MaxInt);
            const txId = codec.unpackID(true);
            console.log('Received transaction ID:', txId);
            const hasError = codec.unpackBool();
            console.log('Transaction has error:', hasError);
            if (hasError) {
                const error = new Error(codec.unpackString(true));
                return resolve([txId, error, undefined, undefined]);
            }
            const [result, err] = Result.fromBytes(codec);
            console.log('Received transaction result:', result, err);
            if (err) {
                return reject(err);
            }
            resolve([txId, undefined, result, codec.getError()]);
        });
    }
    async close() {
        if (!this.isOpen)
            return;
        this.ws.close();
    }
    isClosed() {
        return !this.isOpen;
    }
}
//# sourceMappingURL=websocket.js.map