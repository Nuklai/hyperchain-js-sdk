import { StatefulBlock } from '../chain/block';
import { DimensionsLen, dimensionFromBytes } from '../chain/fees';
import { Result } from '../chain/result';
import { Codec } from '../codec/codec';
import { MaxInt, MaxWriteMessageSize, NETWORK_SIZE_LIMIT } from '../constants/consts';
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints';
import { MessageBuffer, parseBatchMessage } from '../pubsub/messageBuffer';
const BlockMode = 0;
const TxMode = 1;
export class WebSocketService {
    uri;
    conn;
    mb;
    readStopped = false;
    pendingBlocks = [];
    pendingTxs = [];
    startedClose = false;
    closed = false;
    err = null;
    constructor(config) {
        this.uri = this.getWebSocketUri(config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`);
        this.mb = new MessageBuffer(NETWORK_SIZE_LIMIT, 1000 * 10); // 10 second timeout
    }
    connect() {
        console.log('WebSocketService.connect called, connecting to:', this.uri);
        this.conn = new WebSocket(this.uri);
        this.conn.onopen = () => {
            console.log('WebSocket connection opened');
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
                const msgBatch = new Uint8Array(await event.data.arrayBuffer()); // Adjusted for data type
                if (msgBatch.length === 0) {
                    continue;
                }
                const msgs = parseBatchMessage(MaxWriteMessageSize, msgBatch);
                for (const msg of msgs) {
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
                if (await this.mb.hasMessages()) {
                    const queue = await this.mb.getQueue();
                    for (const msg of queue) {
                        this.conn.send(msg);
                    }
                }
                // Throttle the loop to prevent it from running too fast
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            this.err = error;
            this.close();
        }
    }
    async registerBlocks() {
        if (this.closed) {
            return new Error('Connection is closed');
        }
        return await this.mb.send(new Uint8Array([BlockMode]));
    }
    async listenBlock(actionRegistry, authRegistry) {
        console.log('WebSocketService.listenBlock called');
        while (!this.readStopped) {
            const msg = this.pendingBlocks.shift();
            if (msg) {
                return this.unpackBlockMessage(msg, actionRegistry, authRegistry);
            }
            // Throttle the loop to prevent it from running too fast
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    async registerTx(tx) {
        console.log('WebSocketService.registerTx called with transaction:', tx);
        if (this.closed) {
            return new Error('Connection is closed');
        }
        const [txBytes, err] = tx.toBytes();
        if (err) {
            return err;
        }
        const msg = new Uint8Array(1 + txBytes.length);
        msg.set([TxMode], 0);
        msg.set(txBytes, 1);
        return await this.mb.send(msg);
    }
    async listenTx() {
        console.log('WebSocketService.listenTx called');
        while (!this.readStopped) {
            const msg = this.pendingTxs.shift();
            if (msg) {
                return this.unpackTxMessage(msg);
            }
            // Throttle the loop to prevent it from running too fast
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        throw this.err;
    }
    async close() {
        console.log('WebSocketService.close called');
        if (!this.startedClose) {
            this.startedClose = true;
            await this.mb.close(); // Ensure the message buffer is closed properly
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
        return Promise.resolve({ block, results, prices, err: undefined });
    }
    async unpackTxMessage(msg) {
        const codec = Codec.newReader(msg, MaxInt);
        const txId = codec.unpackID(true);
        const hasError = codec.unpackBool();
        if (hasError) {
            const dErr = new Error(codec.unpackString(true));
            return Promise.resolve({ txId, dErr, result: undefined, err: undefined });
        }
        const [result, err] = Result.fromBytes(codec);
        if (err) {
            return Promise.reject(err);
        }
        const finalError = codec.getError();
        return Promise.resolve({ txId, dErr: undefined, result, err: finalError });
    }
}
//# sourceMappingURL=websocket.js.map