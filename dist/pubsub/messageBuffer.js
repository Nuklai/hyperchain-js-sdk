import { Codec } from '../codec/codec';
import { bytesLen } from '../codec/utils';
import { INT_LEN } from '../constants/consts';
import { Timer } from './timer';
export class MessageBuffer {
    queue = [];
    pending = [];
    pendingSize = 0;
    closed = false;
    lock = Promise.resolve(); // Initialize lock as a resolved promise
    maxSize;
    timeout;
    timer;
    constructor(maxSize, timeout) {
        this.queue = [];
        this.pending = [];
        this.pendingSize = 0;
        this.closed = false;
        this.maxSize = maxSize;
        this.timeout = timeout;
        this.timer = new Timer(this.clearPending.bind(this));
    }
    async withLock(fn) {
        let release;
        const newLock = new Promise((resolve) => (release = resolve));
        const previousLock = this.lock;
        this.lock = newLock;
        await previousLock;
        try {
            return fn();
        }
        finally {
            release();
        }
    }
    async send(msg) {
        await this.withLock(() => {
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
                this.timer.setTimeoutIn(this.timeout);
            }
        });
    }
    async clearPending() {
        await this.withLock(() => {
            if (this.pending.length === 0) {
                return;
            }
            const batchMessage = createBatchMessage(this.maxSize, this.pending);
            this.queue.push(batchMessage);
            this.pending = [];
            this.pendingSize = 0;
            this.timer.cancel();
        });
    }
    async getQueue() {
        return this.withLock(() => {
            const result = this.queue;
            this.queue = [];
            return result;
        });
    }
    async hasMessages() {
        return this.withLock(() => this.queue.length > 0);
    }
    async close() {
        await this.withLock(() => {
            if (this.closed) {
                throw new Error('Buffer already closed');
            }
            this.clearPending();
            this.closed = true;
        });
    }
}
export function createBatchMessage(maxSize, msgs) {
    let size = INT_LEN;
    for (const msg of msgs) {
        size += bytesLen(msg);
    }
    const codec = Codec.newWriter(size, maxSize);
    codec.packInt(msgs.length);
    for (const msg of msgs) {
        codec.packBytes(msg);
    }
    return codec.toBytes();
}
export function parseBatchMessage(maxSize, msg) {
    const codec = Codec.newReader(msg, maxSize);
    const msgLen = codec.unpackInt(true);
    const msgs = [];
    for (let i = 0; i < msgLen; i++) {
        const nextMsg = codec.unpackBytes(true);
        if (codec.getError()) {
            throw codec.getError();
        }
        msgs.push(nextMsg);
    }
    return msgs;
}
//# sourceMappingURL=messageBuffer.js.map