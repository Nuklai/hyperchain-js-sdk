// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { Action } from './actions/action'
import { Transfer } from './actions/transfer'
import { Auth } from './auth/auth'
import { BLS } from './auth/bls'
import { ED25519 } from './auth/ed25519'
import { ActionRegistry, AuthRegistry } from './chain/dependencies'
import { TypeParser } from './codec/typeParser'
import { NodeConfig } from './config'
import {
  HYPERCHAIN_ID,
  MAINNET_PUBLIC_API_BASE_URL
} from './constants/endpoints'
import { BLS_ID, ED25519_ID, TRANSFER_ID } from './constants/hypervm'
import { RpcService } from './services/rpc'
import { WebSocketService } from './services/websocket'

export class HyperchainSDK {
  nodeConfig: NodeConfig

  // Hypervm services
  rpcService: RpcService
  wsService: WebSocketService

  // Registry
  actionRegistry: ActionRegistry
  authRegistry: AuthRegistry

  constructor(nodeConfig?: Partial<NodeConfig>) {
    const defaultSDKConfig: NodeConfig = {
      baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
      blockchainId: HYPERCHAIN_ID
    }
    this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig }

    // Hypervm services
    this.rpcService = new RpcService(this.nodeConfig)
    this.wsService = new WebSocketService(this.nodeConfig)

    // Registry
    this.actionRegistry = new TypeParser<Action, boolean>()
    this.authRegistry = new TypeParser<Auth, boolean>()

    this.initializeRegistries()
  }

  private initializeRegistries() {
    // Register actions and auth types
    this.actionRegistry.register(TRANSFER_ID, Transfer.fromBytesCodec, false)
    this.authRegistry.register(BLS_ID, BLS.fromBytesCodec, false)
    this.authRegistry.register(ED25519_ID, ED25519.fromBytesCodec, false)
  }
}
