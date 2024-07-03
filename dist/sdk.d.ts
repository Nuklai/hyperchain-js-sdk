import { ActionRegistry, AuthRegistry } from './chain/dependencies';
import { NodeConfig } from './config';
import { RpcService } from './services/rpc';
import { WebSocketService } from './services/websocket';
export declare class HyperchainSDK {
    nodeConfig: NodeConfig;
    rpcService: RpcService;
    wsService: WebSocketService;
    actionRegistry: ActionRegistry;
    authRegistry: AuthRegistry;
    constructor(nodeConfig?: Partial<NodeConfig>);
    private initializeRegistries;
}
