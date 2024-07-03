// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Transfer } from './actions/transfer';
import { BLS } from './auth/bls';
import { ED25519 } from './auth/ed25519';
import { TypeParser } from './codec/typeParser';
import { HYPERCHAIN_ID, MAINNET_PUBLIC_API_BASE_URL } from './constants/endpoints';
import { BLS_ID, ED25519_ID, TRANSFER_ID } from './constants/hypervm';
import { RpcService } from './services/rpc';
import { WebSocketService } from './services/websocket';
export class HyperchainSDK {
    nodeConfig;
    // Hypervm services
    rpcService;
    wsService;
    // Registry
    actionRegistry;
    authRegistry;
    constructor(nodeConfig) {
        const defaultSDKConfig = {
            baseApiUrl: MAINNET_PUBLIC_API_BASE_URL,
            blockchainId: HYPERCHAIN_ID
        };
        this.nodeConfig = { ...defaultSDKConfig, ...nodeConfig };
        // Hypervm services
        this.rpcService = new RpcService(this.nodeConfig);
        this.wsService = new WebSocketService(this.nodeConfig);
        // Registry
        this.actionRegistry = new TypeParser();
        this.authRegistry = new TypeParser();
        this.initializeRegistries();
    }
    initializeRegistries() {
        // Register actions and auth types
        this.actionRegistry.register(TRANSFER_ID, Transfer.fromBytesCodec, false);
        this.authRegistry.register(BLS_ID, BLS.fromBytesCodec, false);
        this.authRegistry.register(ED25519_ID, ED25519.fromBytesCodec, false);
    }
}
//# sourceMappingURL=sdk.js.map