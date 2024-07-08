import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt, NETWORK_SIZE_LIMIT } from '../constants/consts';
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints';
import { getWebSocketClient, loadWebSocketClient } from './ws/client';
class MessageBuffer {
    queue = [];
    maxSize;
    timeout;
    pending = [];
    pendingSize = 0;
    timerId = null;
    constructor(maxSize, timeout) {
        this.maxSize = maxSize;
        this.timeout = timeout;
    }
    send(msg) {
        const msgLength = msg.length;
        if (msgLength > this.maxSize) {
            throw new Error('Message too large');
        }
        if (this.pendingSize + msgLength > this.maxSize) {
            this.clearPending();
        }
        this.pendingSize += msgLength;
        this.pending.push(msg);
        if (this.pending.length === 1) {
            this.timerId = setTimeout(() => this.clearPending(), this.timeout);
        }
    }
    clearPending() {
        if (this.pending.length === 0) {
            return;
        }
        const codec = Codec.newWriter(this.maxSize, this.maxSize);
        codec.packInt(this.pending.length);
        for (const msg of this.pending) {
            codec.packBytes(msg);
        }
        this.queue.push(codec.toBytes());
        this.pending = [];
        this.pendingSize = 0;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
    getQueue() {
        const result = this.queue;
        this.queue = [];
        return result;
    }
}
export class WebSocketService {
    uri;
    ws;
    messageBuffer;
    pendingBlocks = [];
    pendingTxs = [];
    isOpen = false;
    constructor(config) {
        this.uri = this.getWebSocketUri(config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`);
        this.messageBuffer = new MessageBuffer(NETWORK_SIZE_LIMIT, 1000 * 10); // 10 second timeout
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
            uri = 'ws://' + uri;
        }
        uri = uri.replace(/\/$/, '');
        uri += '/ws';
        return uri;
    }
    async handleMessage(data) {
        console.log('Received message:', data);
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
        console.log(`Received message of type ${messageType}`);
        switch (messageType) {
            case 0: // BlockMode
                this.pendingBlocks.push(messageContent);
                console.log('Received block message:', messageContent);
                break;
            case 1: // TxMode
                this.pendingTxs.push(messageContent);
                console.log('Received transaction message:', messageContent);
                break;
            default:
                console.warn('Unexpected WebSocket message type:', messageType);
        }
    }
    async registerBlocks() {
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
        console.log('Registering for block updates...');
        this.messageBuffer.send(new Uint8Array([0])); // 0 for BlockMode
        this.flushMessages();
    }
    async registerTx(tx) {
        if (!this.isOpen)
            throw new Error('WebSocket is not open.');
        const [txBytes, err] = tx.toBytes();
        if (err) {
            throw err;
        }
        console.log('Registering transaction:', txBytes);
        const data = new Uint8Array(1 + txBytes.length);
        data.set([1], 0);
        data.set(txBytes, 1);
        this.messageBuffer.send(data); // 1 for TxMode followed by transaction bytes
        this.flushMessages();
    }
    flushMessages() {
        const messages = this.messageBuffer.getQueue();
        for (const message of messages) {
            this.ws.send(message);
        }
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
            if (!message) {
                console.log('No transaction messages available.');
                return reject(new Error('No transaction messages available.'));
            }
            console.log('Processing transaction message:', message);
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
        if (!this.isOpen)
            return;
        this.ws.close();
    }
    isClosed() {
        return !this.isOpen;
    }
}
//# sourceMappingURL=websocket.js.map