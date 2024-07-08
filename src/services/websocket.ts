import { Id } from '@avalabs/avalanchejs'
import { StatefulBlock } from '../chain/block'
import { ActionRegistry, AuthRegistry } from '../chain/dependencies'
import { Dimension, DimensionsLen, dimensionFromBytes } from '../chain/fees'
import { Result } from '../chain/result'
import { Transaction } from '../chain/transaction'
import { Codec } from '../codec/codec'
import { NodeConfig } from '../config'
import { MaxInt } from '../constants/consts'
import { WEBSOCKET_ENDPOINT } from '../constants/endpoints'
import { getWebSocketClient, loadWebSocketClient } from './ws/client'

// Custom WebSocket interface (Modified)
interface CustomWebSocket {
  onopen: ((this: WebSocket, ev: Event) => any) | null
  onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null
  onclose: ((this: WebSocket, ev: CloseEvent) => any) | null
  onerror: ((this: WebSocket, ev: Event) => any) | null
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void
  close(code?: number, reason?: string): void
}

export class WebSocketService {
  public uri: string
  private ws!: CustomWebSocket
  private pendingBlocks: Array<Uint8Array> = []
  private pendingTxs: Array<Uint8Array> = []
  private isOpen: boolean = false

  constructor(config: NodeConfig) {
    this.uri = this.getWebSocketUri(
      config.baseApiUrl + `/ext/bc/${config.blockchainId}/${WEBSOCKET_ENDPOINT}`
    )
  }

  async connect() {
    await loadWebSocketClient()
    const WebSocketClient = getWebSocketClient()
    this.ws = new WebSocketClient(this.uri)

    return new Promise<void>((resolve, reject) => {
      this.ws.onopen = () => {
        console.log('WebSocket connection opened.')
        this.isOpen = true
        resolve()
      }

      this.ws.onmessage = async (event: any) => {
        console.log('Received message from WebSocket:', event.data)
        await this.handleMessage(event.data)
      }

      this.ws.onclose = () => {
        this.isOpen = false
        console.log('WebSocket connection closed.')
      }

      this.ws.onerror = (err: any) => {
        console.error('WebSocket error:', err)
        reject(err)
      }
    })
  }

  private getWebSocketUri(apiUrl: string): string {
    let uri = apiUrl.replace(/http:\/\//g, 'ws://')
    uri = uri.replace(/https:\/\//g, 'wss://')
    if (!uri.startsWith('ws')) {
      // fallback to default usage
      uri = 'ws://' + uri
    }
    uri = uri.replace(/\/$/, '')
    return uri
  }

  private async handleMessage(
    data: string | ArrayBufferLike | Blob | ArrayBufferView
  ) {
    console.log('Received message:', data)

    let message: Uint8Array

    if (typeof Blob !== 'undefined' && data instanceof Blob) {
      const arrayBuffer = await data.arrayBuffer()
      message = new Uint8Array(arrayBuffer)
    } else if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
      message = new Uint8Array(data)
    } else if (data instanceof ArrayBuffer) {
      message = new Uint8Array(data)
    } else if (typeof data === 'string') {
      message = new Uint8Array(Buffer.from(data))
    } else {
      throw new Error(`Unsupported WebSocket message type: ${typeof data}`)
    }

    const messageType = message[0]
    const messageContent = message.slice(1)

    console.log(`Received message of type ${messageType}`)

    switch (messageType) {
      case 0: // BlockMode
        this.pendingBlocks.push(messageContent)
        console.log('Received block message:', messageContent)
        break
      case 1: // TxMode
        this.pendingTxs.push(messageContent)
        console.log('Received transaction message:', messageContent)
        break
      default:
        console.warn('Unexpected WebSocket message type:', messageType)
    }
  }

  async registerBlocks() {
    if (!this.isOpen) throw new Error('WebSocket is not open.')
    console.log('Registering for block updates...')
    this.ws.send(new Uint8Array([0])) // 0 for BlockMode
  }

  async registerTx(tx: Transaction) {
    if (!this.isOpen) throw new Error('WebSocket is not open.')
    const [txBytes, err] = tx.toBytes()
    if (err) {
      throw err
    }
    console.log('Registering transaction:', txBytes)
    this.ws.send(new Uint8Array([1, ...txBytes])) // 1 for TxMode followed by transaction bytes
  }

  async listenBlock(
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry
  ): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]> {
    if (!this.isOpen) throw new Error('WebSocket is not open.')
    return new Promise((resolve, reject) => {
      const message = this.pendingBlocks.shift()
      if (!message) {
        return reject(new Error('No block messages available.'))
      }
      let codec = Codec.newReader(message, MaxInt)
      const blkMessage = codec.unpackBytes(true)
      const [block, c] = StatefulBlock.fromBytes(
        blkMessage,
        actionRegistry,
        authRegistry
      )
      if (c.getError()) {
        return reject(c.getError())
      }
      codec = c
      const resultsMessage = codec.unpackBytes(true)
      const [results, errResults] = Result.resultsFromBytes(resultsMessage)
      if (errResults) {
        return reject(errResults)
      }
      const pricesMessage = codec.unpackFixedBytes(DimensionsLen)
      const [prices, errMessage] = dimensionFromBytes(pricesMessage)
      if (errMessage) {
        return reject(errMessage)
      }
      if (!codec.empty()) {
        return reject(new Error('Invalid object'))
      }
      resolve([block, results, prices])
    })
  }

  async listenTx(): Promise<[Id, Error?, Result?, Error?]> {
    if (!this.isOpen) throw new Error('WebSocket is not open.')
    return new Promise((resolve, reject) => {
      const message = this.pendingTxs.shift()
      if (!message) {
        console.log('No transaction messages available.')
        return reject(new Error('No transaction messages available.'))
      }
      console.log('Processing transaction message:', message)
      const codec = Codec.newReader(message, MaxInt)
      const txId = codec.unpackID(true)
      const hasError = codec.unpackBool()
      if (hasError) {
        const error = new Error(codec.unpackString(true))
        return resolve([txId, error, undefined, undefined])
      }
      const [result, err] = Result.fromBytes(codec)
      if (err) {
        return reject(err)
      }
      resolve([txId, undefined, result, codec.getError()])
    })
  }

  async close() {
    if (!this.isOpen) return
    this.ws.close()
  }

  isClosed(): boolean {
    return !this.isOpen
  }
}
