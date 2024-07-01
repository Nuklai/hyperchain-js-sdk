// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { Action } from "./actions/action";
import { Transfer } from "./actions/transfer";
import { Auth } from "./auth/auth";
import { BLS } from "./auth/bls";
import { ED25519 } from "./auth/ed25519";
import { ActionRegistry, AuthRegistry } from "./chain/dependencies";
import { TypeParser } from "./codec/typeParser";
import { NodeConfig } from "./config";
import {
  HYPERCHAIN_ID,
  MAINNET_PUBLIC_API_BASE_URL
} from "./constants/endpoints";
import { BLS_ID, ED25519_ID, TRANSFER_ID } from "./constants/hypervm";
import { RpcService } from "./services/rpc";

export * as actions from "./actions";
export * as auth from "./auth";
export * as chain from "./chain";
export * as codec from "./codec";
export * as common from "./common";
export * as config from "./config";
export * as consts from "./constants";
export * as crypto from "./crypto";
export * as services from "./services";
export * as utils from "./utils";

export class HyperchainSDK {
  nodeConfig: NodeConfig;

  // Hypervm services
  rpcService: RpcService;

  // Registry
  actionRegistry: ActionRegistry = new TypeParser<Action, boolean>();
  authRegistry: AuthRegistry = new TypeParser<Auth, boolean>();

  constructor(nodeConfig?: Partial<NodeConfig>) {
    const defaultSDKConfig: NodeConfig = {
      baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
      blockchainId: HYPERCHAIN_ID
    };
    this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig };

    // Hypervm services
    this.rpcService = new RpcService(this.nodeConfig);

    // Registry
    this.actionRegistry.register(TRANSFER_ID, Transfer.fromBytesCodec, false);
    this.authRegistry.register(BLS_ID, BLS.fromBytesCodec, false);
    this.authRegistry.register(ED25519_ID, ED25519.fromBytesCodec, false);
  }
}
