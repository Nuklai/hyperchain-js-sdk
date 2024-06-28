// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { NodeConfig } from './config'
import {
  HYPERCHAIN_ID,
  MAINNET_PUBLIC_API_BASE_URL
} from './constants/endpoints'
import { RpcService } from './services/rpc'

export * as actions from './actions'
export * as auth from './auth'
export * as common from './common'
export * as config from './config'
export * as consts from './constants'
export * as crypto from './crypto'
export * as services from './services'
export * as transactions from './transactions'
export * as utils from './utils'

export class HyperchainSDK {
  nodeConfig: NodeConfig

  // Hypervm services
  rpcService: RpcService

  constructor(nodeConfig?: Partial<NodeConfig>) {
    const defaultSDKConfig: NodeConfig = {
      baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
      blockchainId: HYPERCHAIN_ID
    }
    this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig }

    // Hypervm services
    this.rpcService = new RpcService(this.nodeConfig)
  }
}
