import { Id } from '@avalabs/avalanchejs'
import { StatefulBlock } from '../chain/block'
import { ActionRegistry, AuthRegistry } from '../chain/dependencies'
import { Dimension, DimensionsLen, dimensionFromBytes } from '../chain/fees'
import { Result } from '../chain/result'
import { Transaction } from '../chain/transaction'
import { Codec } from '../codec/codec'
import { NodeConfig } from '../config'
import {
  MaxInt,
  MaxWriteMessageSize,
  NETWORK_SIZE_LIMIT
} from '../constants/consts'
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints'
import { MessageBuffer, parseBatchMessage } from '../pubsub/messageBuffer'

const BlockMode = 0
const TxMode = 1

export class WebSocketService {
  public uri: string
  private conn!: WebSocket
  private mb: MessageBuffer
  private readStopped: boolean = false
  private pendingBlocks: Array<Uint8Array> = []
  private pendingTxs: Array<Uint8Array> = []
  private startedClose: boolean = false
  private closed: boolean = false
  private err: Error | null = null

  constructor(config: NodeConfig) {
    this.uri = this.getWebSocketUri(
      config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`
    )
    this.mb = new MessageBuffer(NETWORK_SIZE_LIMIT, 1000 * 10) // 10 second timeout
  }

  async connect() {
    console.log('WebSocketService.connect called, connecting to:', this.uri)
    this.conn = new WebSocket(this.uri)
    this.conn.onopen = () => {
      console.log('WebSocket connection opened')
      this.readLoop()
      this.writeLoop()
    }

    this.conn.onerror = (event) => {
      console.error('WebSocket error:', event)
      this.err = new Error(`WebSocket error: ${event}`)
      this.close()
    }
  }

  private getWebSocketUri(apiUrl: string): string {
    let uri = apiUrl.replace(/http:\/\//g, 'ws://')
    uri = apiUrl.replace(/https:\/\//g, 'wss://')
    if (!uri.startsWith('ws')) {
      uri = 'ws://' + uri
    }
    uri = uri.replace(/\/$/, '')
    return uri
  }

  private async readLoop() {
    console.log('WebSocketService.readLoop started')
    try {
      while (this.conn.readyState === WebSocket.OPEN) {
        const event = await new Promise<MessageEvent>(
          (resolve) => (this.conn.onmessage = resolve)
        )
        console.log('WebSocket message received:', event)
        const msgBatch = new Uint8Array(await event.data.arrayBuffer()) // Adjusted for data type
        if (msgBatch.length === 0) {
          console.warn('got empty message')
          continue
        }

        console.log('msgBatch:', msgBatch)

        const msgs = parseBatchMessage(MaxWriteMessageSize, msgBatch)
        for (const msg of msgs) {
          console.log('Message after Parsed:', msg)
          const mode = msg[0]
          const tmsg = msg.slice(1)
          if (mode === BlockMode) {
            console.log('Block mode message:', tmsg)
            this.pendingBlocks.push(tmsg)
          } else if (mode === TxMode) {
            console.log('Tx mode message:', tmsg)
            this.pendingTxs.push(tmsg)
          } else {
            console.warn(`unexpected message mode: ${mode}`)
          }
        }
      }
    } catch (error: any) {
      console.error('WebSocket read loop error:', error)
      this.err = error
      this.close()
    } finally {
      this.readStopped = true
      console.log('WebSocketService.readLoop stopped')
    }
  }

  private async writeLoop() {
    console.log('WebSocketService.writeLoop started')
    try {
      while (this.conn.readyState === WebSocket.OPEN) {
        if (await this.mb.hasMessages()) {
          const queue = await this.mb.getQueue()
          for (const msg of queue) {
            console.log('Sending message:', msg)
            this.conn.send(msg)
          }
        }
        // Throttle the loop to prevent it from running too fast
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    } catch (error: any) {
      console.error('WebSocket write loop error:', error)
      this.err = error
      this.close()
    } finally {
      console.log('WebSocketService.writeLoop stopped')
    }
  }

  async registerBlocks() {
    console.log('WebSocketService.registerBlocks called')
    if (this.closed) {
      throw new Error('Connection is closed')
    }
    await this.mb.send(new Uint8Array([BlockMode]))
  }

  async listenBlock(
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry
  ): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]> {
    console.log('WebSocketService.listenBlock called')
    while (!this.readStopped) {
      const msg = this.pendingBlocks.shift()
      if (msg) {
        console.log('Block message received:', msg)
        return this.unpackBlockMessage(msg, actionRegistry, authRegistry)
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
    throw this.err
  }

  async registerTx(tx: Transaction) {
    console.log('WebSocketService.registerTx called with transaction:', tx)
    if (this.closed) {
      throw new Error('Connection is closed')
    }
    const [txBytes, err] = tx.toBytes()
    if (err) {
      throw err
    }
    const msg = new Uint8Array(1 + txBytes.length)
    msg.set([TxMode], 0)
    msg.set(txBytes, 1)
    await this.mb.send(msg)
  }

  async listenTx(): Promise<[Id, Error?, Result?, Error?]> {
    console.log('WebSocketService.listenTx called')
    while (!this.readStopped) {
      const msg = this.pendingTxs.shift()
      if (msg) {
        console.log('Transaction message received:', msg)
        return this.unpackTxMessage(msg)
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
    throw this.err
  }

  async close() {
    console.log('WebSocketService.close called')
    if (!this.startedClose) {
      this.startedClose = true
      await this.mb.close() // Ensure the message buffer is closed properly
      this.conn.close()
      this.closed = true
    }
  }

  private unpackBlockMessage(
    msg: Uint8Array,
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry
  ): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]> {
    console.log('WebSocketService.unpackBlockMessage called with message:', msg)
    let codec = Codec.newReader(msg, MaxInt)
    const blkMessage = codec.unpackBytes(true)
    const [block, c] = StatefulBlock.fromBytes(
      blkMessage,
      actionRegistry,
      authRegistry
    )
    if (c.getError()) {
      console.error('Error unpacking block:', c.getError())
      return Promise.reject(c.getError())
    }
    codec = c
    const resultsMessage = codec.unpackBytes(true)
    const [results, errResults] = Result.resultsFromBytes(resultsMessage)
    if (errResults) {
      console.error('Error unpacking results:', errResults)
      return Promise.reject(errResults)
    }
    const pricesMessage = codec.unpackFixedBytes(DimensionsLen)
    const [prices, errMessage] = dimensionFromBytes(pricesMessage)
    if (errMessage) {
      console.error('Error unpacking prices:', errMessage)
      return Promise.reject(errMessage)
    }
    if (!codec.empty()) {
      return Promise.reject(new Error('Invalid object'))
    }
    console.log('Block message unpacked successfully')
    return Promise.resolve([block, results, prices])
  }

  private unpackTxMessage(
    msg: Uint8Array
  ): Promise<[Id, Error?, Result?, Error?]> {
    console.log('WebSocketService.unpackTxMessage called with message:', msg)
    const codec = Codec.newReader(msg, MaxInt)
    const txId = codec.unpackID(true)
    const hasError = codec.unpackBool()
    if (hasError) {
      const error = new Error(codec.unpackString(true))
      console.error('Transaction error unpacked:', error)
      return Promise.resolve([txId, error, undefined, undefined])
    }
    const [result, err] = Result.fromBytes(codec)
    if (err) {
      console.error('Error unpacking transaction result:', err)
      return Promise.reject(err)
    }
    console.log('Transaction message unpacked successfully')
    return Promise.resolve([txId, undefined, result, codec.getError()])
  }
}
