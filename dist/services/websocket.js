import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt, NETWORK_SIZE_LIMIT } from '../constants/consts';
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints';
const BlockMode = 0;
const TxMode = 1;
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
        console.log('MessageBuffer.send called with msg:', msg);
        const msgLength = msg.length;
        if (msgLength > this.maxSize) {
            throw new Error('Message too large');
        }
        if (this.pendingSize + msgLength > this.maxSize) {
            console.log('MessageBuffer: pendingSize exceeded, clearing pending messages');
            this.clearPending();
        }
        this.pendingSize += msgLength;
        this.pending.push(msg);
        if (this.pending.length === 1) {
            this.timerId = setTimeout(() => this.clearPending(), this.timeout);
        }
    }
    clearPending() {
        console.log('MessageBuffer.clearPending called');
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
        console.log('MessageBuffer.getQueue called');
        const result = this.queue;
        this.queue = [];
        return result;
    }
}
export class WebSocketService {
    uri;
    conn;
    mb;
    readStopped = false;
    writeStopped = false;
    pendingBlocks = [];
    pendingTxs = [];
    startedClose = false;
    closed = false;
    err = null;
    constructor(config) {
        this.uri = this.getWebSocketUri(config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`);
        this.mb = new MessageBuffer(NETWORK_SIZE_LIMIT, 1000 * 10); // 10 second timeout
    }
    async connect() {
        console.log('WebSocketService.connect called, connecting to:', this.uri);
        this.conn = new WebSocket(this.uri);
        this.conn.onopen = () => {
            console.log('WebSocket connection opened');
            this.readLoop();
            this.writeLoop();
        };
        this.conn.onerror = (event) => {
            console.error('WebSocket error:', event);
            this.err = new Error(`WebSocket error: ${event}`);
            this.close();
        };
    }
    getWebSocketUri(apiUrl) {
        console.log('WebSocketService.getWebSocketUri called with apiUrl:', apiUrl);
        let uri = apiUrl.replace(/http:\/\//g, 'ws://');
        uri = uri.replace(/https:\/\//g, 'wss://');
        if (!uri.startsWith('ws')) {
            uri = 'ws://' + uri;
        }
        uri = uri.replace(/\/$/, '');
        console.log('WebSocket URI constructed:', uri);
        return uri;
    }
    async readLoop() {
        console.log('WebSocketService.readLoop started');
        try {
            while (this.conn.readyState === WebSocket.OPEN) {
                const event = await new Promise((resolve) => (this.conn.onmessage = resolve));
                console.log('WebSocket message received:', event);
                const msgBatch = new Uint8Array(event.data);
                if (msgBatch.length === 0) {
                    console.warn('got empty message');
                    continue;
                }
                const codec = Codec.newReader(msgBatch, MaxInt);
                const msgCount = codec.unpackInt(false);
                for (let i = 0; i < msgCount; i++) {
                    const msg = codec.unpackBytes(false);
                    const mode = msg[0];
                    const tmsg = msg.slice(1);
                    if (mode === BlockMode) {
                        this.pendingBlocks.push(tmsg);
                    }
                    else if (mode === TxMode) {
                        this.pendingTxs.push(tmsg);
                    }
                    else {
                        console.warn(`unexpected message mode: ${mode}`);
                    }
                }
            }
        }
        catch (error) {
            console.error('WebSocket read loop error:', error);
            this.err = error;
            this.close();
        }
        finally {
            this.readStopped = true;
            console.log('WebSocketService.readLoop stopped');
        }
    }
    async writeLoop() {
        console.log('WebSocketService.writeLoop started');
        try {
            while (this.conn.readyState === WebSocket.OPEN) {
                const queue = this.mb.getQueue();
                for (const msg of queue) {
                    console.log('Sending message:', msg);
                    this.conn.send(msg);
                }
                // Throttle the loop to prevent it from running too fast
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            console.error('WebSocket write loop error:', error);
            this.err = error;
            this.close();
        }
        finally {
            this.writeStopped = true;
            console.log('WebSocketService.writeLoop stopped');
        }
    }
    async registerBlocks() {
        console.log('WebSocketService.registerBlocks called');
        if (this.closed) {
            throw new Error('Connection is closed');
        }
        this.mb.send(new Uint8Array([BlockMode]));
    }
    async listenBlock(actionRegistry, authRegistry) {
        console.log('WebSocketService.listenBlock called');
        while (!this.readStopped) {
            const msg = this.pendingBlocks.shift();
            if (msg) {
                console.log('Block message received:', msg);
                return this.unpackBlockMessage(msg, actionRegistry, authRegistry);
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    async registerTx(tx) {
        console.log('WebSocketService.registerTx called with transaction:', tx);
        if (this.closed) {
            throw new Error('Connection is closed');
        }
        const [txBytes, err] = tx.toBytes();
        if (err) {
            throw err;
        }
        const msg = new Uint8Array(1 + txBytes.length);
        msg.set([TxMode], 0);
        msg.set(txBytes, 1);
        this.mb.send(msg);
    }
    async listenTx() {
        console.log('WebSocketService.listenTx called');
        while (!this.readStopped) {
            const msg = this.pendingTxs.shift();
            if (msg) {
                console.log('Transaction message received:', msg);
                return this.unpackTxMessage(msg);
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    close() {
        console.log('WebSocketService.close called');
        if (!this.startedClose) {
            this.startedClose = true;
            this.conn.close();
            this.closed = true;
        }
    }
    unpackBlockMessage(msg, actionRegistry, authRegistry) {
        console.log('WebSocketService.unpackBlockMessage called with message:', msg);
        let codec = Codec.newReader(msg, MaxInt);
        const blkMessage = codec.unpackBytes(true);
        const [block, c] = StatefulBlock.fromBytes(blkMessage, actionRegistry, authRegistry);
        if (c.getError()) {
            console.error('Error unpacking block:', c.getError());
            return Promise.reject(c.getError());
        }
        codec = c;
        const resultsMessage = codec.unpackBytes(true);
        const [results, errResults] = Result.resultsFromBytes(resultsMessage);
        if (errResults) {
            console.error('Error unpacking results:', errResults);
            return Promise.reject(errResults);
        }
        const pricesMessage = codec.unpackFixedBytes(DimensionsLen);
        const [prices, errMessage] = dimensionFromBytes(pricesMessage);
        if (errMessage) {
            console.error('Error unpacking prices:', errMessage);
            return Promise.reject(errMessage);
        }
        if (!codec.empty()) {
            return Promise.reject(new Error('Invalid object'));
        }
        console.log('Block message unpacked successfully');
        return Promise.resolve([block, results, prices]);
    }
    unpackTxMessage(msg) {
        console.log('WebSocketService.unpackTxMessage called with message:', msg);
        const codec = Codec.newReader(msg, MaxInt);
        const txId = codec.unpackID(true);
        const hasError = codec.unpackBool();
        if (hasError) {
            const error = new Error(codec.unpackString(true));
            console.error('Transaction error unpacked:', error);
            return Promise.resolve([txId, error, undefined, undefined]);
        }
        const [result, err] = Result.fromBytes(codec);
        if (err) {
            console.error('Error unpacking transaction result:', err);
            return Promise.reject(err);
        }
        console.log('Transaction message unpacked successfully');
        return Promise.resolve([txId, undefined, result, codec.getError()]);
    }
}
//# sourceMappingURL=websocket.js.map