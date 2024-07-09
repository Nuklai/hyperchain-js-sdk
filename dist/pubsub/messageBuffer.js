import { Codec } from '../codec/codec';
export class MessageBuffer {
    queue = [];
    pending = [];
    pendingSize = 0;
    closed = false;
    timerId = null;
    lock = Promise.resolve(); // Initialize lock as a resolved promise
    maxSize;
    timeout;
    constructor(maxSize, timeout) {
        this.maxSize = maxSize;
        this.timeout = timeout;
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
        });
    }
    async clearPending() {
        await this.withLock(() => {
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
        });
    }
    async getQueue() {
        return this.withLock(() => {
            console.log('MessageBuffer.getQueue called');
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
//# sourceMappingURL=messageBuffer.js.map