export declare class MessageBuffer {
    private queue;
    private pending;
    private pendingSize;
    private closed;
    private timerId;
    private lock;
    private maxSize;
    private timeout;
    constructor(maxSize: number, timeout: number);
    private withLock;
    send(msg: Uint8Array): Promise<void>;
    clearPending(): Promise<void>;
    getQueue(): Promise<Array<Uint8Array>>;
    hasMessages(): Promise<boolean>;
    close(): Promise<void>;
}
