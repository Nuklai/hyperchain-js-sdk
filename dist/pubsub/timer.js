// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
export class Timer {
    callback;
    timeoutId = null;
    constructor(callback) {
        this.callback = callback;
    }
    setTimeoutIn(timeout) {
        this.clearTimeout();
        this.timeoutId = setTimeout(this.callback, timeout);
    }
    cancel() {
        this.clearTimeout();
    }
    stop() {
        this.clearTimeout();
    }
    clearTimeout() {
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}
//# sourceMappingURL=timer.js.map