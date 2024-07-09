export declare class Timer {
    private callback;
    private timeoutId;
    constructor(callback: () => void);
    setTimeoutIn(timeout: number): void;
    cancel(): void;
    stop(): void;
    private clearTimeout;
}
