// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

export class Timer {
  private callback: () => void
  private timeoutId: ReturnType<typeof setTimeout> | null = null

  constructor(callback: () => void) {
    this.callback = callback
  }

  setTimeoutIn(timeout: number) {
    this.clearTimeout()
    this.timeoutId = setTimeout(this.callback, timeout)
  }

  cancel() {
    this.clearTimeout()
  }

  stop() {
    this.clearTimeout()
  }

  private clearTimeout() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
  }
}
