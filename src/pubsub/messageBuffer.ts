import { Codec } from '../codec/codec'

export class MessageBuffer {
  private queue: Array<Uint8Array> = []
  private pending: Array<Uint8Array> = []
  private pendingSize: number = 0
  private closed: boolean = false
  private timerId: any = null
  private lock = Promise.resolve() // Initialize lock as a resolved promise
  private maxSize: number
  private timeout: number

  constructor(maxSize: number, timeout: number) {
    this.maxSize = maxSize
    this.timeout = timeout
  }

  private async withLock<T>(fn: () => T): Promise<T> {
    let release: () => void
    const newLock = new Promise<void>((resolve) => (release = resolve))
    const previousLock = this.lock
    this.lock = newLock

    await previousLock
    try {
      return fn()
    } finally {
      release!()
    }
  }

  async send(msg: Uint8Array) {
    await this.withLock(() => {
      console.log('MessageBuffer.send called with msg:', msg)
      const msgLength = msg.length

      if (msgLength > this.maxSize) {
        throw new Error('Message too large')
      }

      if (this.pendingSize + msgLength > this.maxSize) {
        console.log(
          'MessageBuffer: pendingSize exceeded, clearing pending messages'
        )
        this.clearPending()
      }

      this.pendingSize += msgLength
      this.pending.push(msg)

      if (this.pending.length === 1) {
        this.timerId = setTimeout(() => this.clearPending(), this.timeout)
      }
    })
  }

  async clearPending() {
    await this.withLock(() => {
      console.log('MessageBuffer.clearPending called')
      if (this.pending.length === 0) {
        return
      }

      const codec = Codec.newWriter(this.maxSize, this.maxSize)
      codec.packInt(this.pending.length)
      for (const msg of this.pending) {
        codec.packBytes(msg)
      }

      this.queue.push(codec.toBytes())
      this.pending = []
      this.pendingSize = 0

      if (this.timerId) {
        clearTimeout(this.timerId)
        this.timerId = null
      }
    })
  }

  async getQueue(): Promise<Array<Uint8Array>> {
    return this.withLock(() => {
      console.log('MessageBuffer.getQueue called')
      const result = this.queue
      this.queue = []
      return result
    })
  }

  async hasMessages(): Promise<boolean> {
    return this.withLock(() => this.queue.length > 0)
  }

  async close() {
    await this.withLock(() => {
      if (this.closed) {
        throw new Error('Buffer already closed')
      }

      this.clearPending()
      this.closed = true
    })
  }
}
