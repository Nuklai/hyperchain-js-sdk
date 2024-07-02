// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { Id } from '@avalabs/avalanchejs'
import { ActionRegistry, AuthRegistry } from 'chain/dependencies'
import WebSocket from 'ws'
import { StatefulBlock } from '../chain/block'
import { Dimension, DimensionsLen, dimensionFromBytes } from '../chain/fees'
import { Result } from '../chain/result'
import { Transaction } from '../chain/transaction'
import { Codec } from '../codec/codec'
import { NodeConfig } from '../config'
import { MaxInt } from '../constants/consts'

export class WebSocketService {
  private ws: WebSocket
  private pendingBlocks: Array<Uint8Array> = []
  private pendingTxs: Array<Uint8Array> = []
  private closed: boolean = false

  constructor(config: NodeConfig) {
    // TODO: get the websocket url from the config
    this.ws = new WebSocket(this.getWebSocketUri(config.baseApiUrl))
  }

  async connect() {
    this.ws.on('open', () => {
      console.log('WebSocket connection opened.')
    })

    this.ws.on('message', (data: WebSocket.Data) => {
      this.handleMessage(data)
    })

    this.ws.on('close', () => {
      this.closed = true
      console.log('WebSocket connection closed.')
    })

    this.ws.on('error', (err: Error) => {
      console.error('WebSocket error:', err)
    })
  }

  private getWebSocketUri(apiUrl: string): string {
    let uri = apiUrl.replace(/^http/, 'ws')
    uri = uri.endsWith('/') ? uri : `${uri}/`
    uri += 'ws'
    return uri
  }

  private handleMessage(data: WebSocket.Data) {
    const msg = new Uint8Array(data as ArrayBuffer)
    const messageType = msg[0]
    const message = msg.slice(1)

    switch (messageType) {
      case 0: // BlockMode
        this.pendingBlocks.push(message)
        break
      case 1: // TxMode
        this.pendingTxs.push(message)
        break
      default:
        console.warn('Unexpected WebSocket message type:', messageType)
    }
  }

  async registerBlocks() {
    if (this.closed) throw new Error('WebSocket is closed.')
    this.ws.send(JSON.stringify({ type: 'register', messageType: 'block' }))
  }

  async registerTx(tx: Transaction) {
    if (this.closed) throw new Error('WebSocket is closed.')
    this.ws.send(
      JSON.stringify({
        type: 'register',
        messageType: 'tx',
        data: tx.toBytes()
      })
    )
  }

  async listenBlock(
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry
  ): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]> {
    if (this.closed) throw new Error('WebSocket is closed.')
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
    if (this.closed) throw new Error('WebSocket is closed.')
    return new Promise((resolve, reject) => {
      const message = this.pendingTxs.shift()
      if (!message) {
        return reject(new Error('No transaction messages available.'))
      }
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
    if (this.closed) return
    this.ws.close()
  }

  isClosed(): boolean {
    return this.closed
  }
}
