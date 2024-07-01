"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperchainSDK = void 0;
const transfer_1 = require("./actions/transfer");
const bls_1 = require("./auth/bls");
const ed25519_1 = require("./auth/ed25519");
const typeParser_1 = require("./codec/typeParser");
const endpoints_1 = require("./constants/endpoints");
const hypervm_1 = require("./constants/hypervm");
const rpc_1 = require("./services/rpc");
class HyperchainSDK {
    nodeConfig;
    // Hypervm services
    rpcService;
    // Registry
    actionRegistry = new typeParser_1.TypeParser();
    authRegistry = new typeParser_1.TypeParser();
    constructor(nodeConfig) {
        const defaultSDKConfig = {
            baseApiUrl: endpoints_1.MAINNET_PUBLIC_API_BASE_URL,
            blockchainId: endpoints_1.HYPERCHAIN_ID
        };
        this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig };
        // Hypervm services
        this.rpcService = new rpc_1.RpcService(this.nodeConfig);
        // Registry
        this.actionRegistry.register(hypervm_1.TRANSFER_ID, transfer_1.Transfer.fromBytesCodec, false);
        this.authRegistry.register(hypervm_1.BLS_ID, bls_1.BLS.fromBytesCodec, false);
        this.authRegistry.register(hypervm_1.ED25519_ID, ed25519_1.ED25519.fromBytesCodec, false);
    }
}
exports.HyperchainSDK = HyperchainSDK;
//# sourceMappingURL=sdk.js.map