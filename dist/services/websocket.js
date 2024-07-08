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
        this.conn = new WebSocket(this.uri);
        this.conn.onopen = () => {
            this.readLoop();
            this.writeLoop();
        };
        this.conn.onerror = (event) => {
            this.err = new Error(`WebSocket error: ${event}`);
            this.close();
        };
    }
    getWebSocketUri(apiUrl) {
        let uri = apiUrl.replace(/http:\/\//g, 'ws://');
        uri = uri.replace(/https:\/\//g, 'wss://');
        if (!uri.startsWith('ws')) {
            uri = 'ws://' + uri;
        }
        uri = uri.replace(/\/$/, '');
        return uri;
    }
    async readLoop() {
        try {
            while (this.conn.readyState === WebSocket.OPEN) {
                const event = await new Promise((resolve) => (this.conn.onmessage = resolve));
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
            this.err = error;
            this.close();
        }
        finally {
            this.readStopped = true;
        }
    }
    async writeLoop() {
        try {
            while (this.conn.readyState === WebSocket.OPEN) {
                const queue = this.mb.getQueue();
                for (const msg of queue) {
                    this.conn.send(msg);
                }
            }
        }
        catch (error) {
            this.err = error;
            this.close();
        }
        finally {
            this.writeStopped = true;
        }
    }
    async registerBlocks() {
        if (this.closed) {
            throw new Error('Connection is closed');
        }
        this.mb.send(new Uint8Array([BlockMode]));
    }
    async listenBlock(actionRegistry, authRegistry) {
        while (!this.readStopped) {
            const msg = this.pendingBlocks.shift();
            if (msg) {
                return this.unpackBlockMessage(msg, actionRegistry, authRegistry);
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    async registerTx(tx) {
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
        while (!this.readStopped) {
            const msg = this.pendingTxs.shift();
            if (msg) {
                return this.unpackTxMessage(msg);
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    close() {
        if (!this.startedClose) {
            this.startedClose = true;
            this.conn.close();
            this.closed = true;
        }
    }
    unpackBlockMessage(msg, actionRegistry, authRegistry) {
        let codec = Codec.newReader(msg, MaxInt);
        const blkMessage = codec.unpackBytes(true);
        const [block, c] = StatefulBlock.fromBytes(blkMessage, actionRegistry, authRegistry);
        if (c.getError()) {
            return Promise.reject(c.getError());
        }
        codec = c;
        const resultsMessage = codec.unpackBytes(true);
        const [results, errResults] = Result.resultsFromBytes(resultsMessage);
        if (errResults) {
            return Promise.reject(errResults);
        }
        const pricesMessage = codec.unpackFixedBytes(DimensionsLen);
        const [prices, errMessage] = dimensionFromBytes(pricesMessage);
        if (errMessage) {
            return Promise.reject(errMessage);
        }
        if (!codec.empty()) {
            return Promise.reject(new Error('Invalid object'));
        }
        return Promise.resolve([block, results, prices]);
    }
    unpackTxMessage(msg) {
        const codec = Codec.newReader(msg, MaxInt);
        const txId = codec.unpackID(true);
        const hasError = codec.unpackBool();
        if (hasError) {
            const error = new Error(codec.unpackString(true));
            return Promise.resolve([txId, error, undefined, undefined]);
        }
        const [result, err] = Result.fromBytes(codec);
        if (err) {
            return Promise.reject(err);
        }
        return Promise.resolve([txId, undefined, result, codec.getError()]);
    }
}
//# sourceMappingURL=websocket.js.map