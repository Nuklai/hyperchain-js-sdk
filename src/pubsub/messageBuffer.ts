import { Codec } from '../codec/codec'
import { bytesLen } from '../codec/utils'
import { INT_LEN } from '../constants/consts'
import { Timer } from './timer'

export class MessageBuffer {
  private queue: Array<Uint8Array> = []
  private pending: Array<Uint8Array> = []
  private pendingSize: number = 0
  private closed: boolean = false
  private lock = Promise.resolve() // Initialize lock as a resolved promise
  private maxSize: number
  private timeout: number
  private timer: Timer

  constructor(maxSize: number, timeout: number) {
    this.queue = []
    this.pending = []
    this.pendingSize = 0
    this.closed = false
    this.maxSize = maxSize
    this.timeout = timeout
    this.timer = new Timer(this.clearPending.bind(this))
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
        this.timer.setTimeoutIn(this.timeout)
      }
    })
  }

  async clearPending() {
    await this.withLock(() => {
      console.log('MessageBuffer.clearPending called')
      if (this.pending.length === 0) {
        return
      }

      const batchMessage = createBatchMessage(this.maxSize, this.pending)
      console.log('MessageBuffer: batchMessage:', batchMessage)
      this.queue.push(batchMessage)
      this.pending = []
      this.pendingSize = 0

      this.timer.cancel()
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

export function createBatchMessage(
  maxSize: number,
  msgs: Uint8Array[]
): Uint8Array {
  let size = INT_LEN
  for (const msg of msgs) {
    size += bytesLen(msg)
  }
  const codec = Codec.newWriter(size, maxSize)
  codec.packInt(msgs.length)
  for (const msg of msgs) {
    codec.packBytes(msg)
  }
  return codec.toBytes()
}

export function parseBatchMessage(
  maxSize: number,
  msg: Uint8Array
): Uint8Array[] {
  const codec = Codec.newReader(msg, maxSize)
  const msgLen = codec.unpackInt(true)
  const msgs: Uint8Array[] = []
  for (let i = 0; i < msgLen; i++) {
    const nextMsg = codec.unpackBytes(true)
    if (codec.getError()) {
      throw codec.getError()
    }
    msgs.push(nextMsg)
  }
  return msgs
}
