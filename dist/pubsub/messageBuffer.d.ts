export declare class MessageBuffer {
    private queue;
    private pending;
    private pendingSize;
    private closed;
    private lock;
    private maxSize;
    private timeout;
    private timer;
    constructor(maxSize: number, timeout: number);
    private withLock;
    send(msg: Uint8Array): Promise<void>;
    clearPending(): Promise<void>;
    getQueue(): Promise<Array<Uint8Array>>;
    hasMessages(): Promise<boolean>;
    close(): Promise<void>;
}
export declare function createBatchMessage(maxSize: number, msgs: Uint8Array[]): Uint8Array;
export declare function parseBatchMessage(maxSize: number, msg: Uint8Array): Uint8Array[];
