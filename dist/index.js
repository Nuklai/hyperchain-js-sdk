"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperchainSDK = exports.utils = exports.services = exports.crypto = exports.consts = exports.config = exports.common = exports.codec = exports.chain = exports.auth = exports.actions = void 0;
const transfer_1 = require("./actions/transfer");
const bls_1 = require("./auth/bls");
const ed25519_1 = require("./auth/ed25519");
const typeParser_1 = require("./codec/typeParser");
const endpoints_1 = require("./constants/endpoints");
const hypervm_1 = require("./constants/hypervm");
const rpc_1 = require("./services/rpc");
exports.actions = __importStar(require("./actions"));
exports.auth = __importStar(require("./auth"));
exports.chain = __importStar(require("./chain"));
exports.codec = __importStar(require("./codec"));
exports.common = __importStar(require("./common"));
exports.config = __importStar(require("./config"));
exports.consts = __importStar(require("./constants"));
exports.crypto = __importStar(require("./crypto"));
exports.services = __importStar(require("./services"));
exports.utils = __importStar(require("./utils"));
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
//# sourceMappingURL=index.js.map