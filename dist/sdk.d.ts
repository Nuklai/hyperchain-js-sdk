import { ActionRegistry, AuthRegistry } from "./chain/dependencies";
import { NodeConfig } from "./config";
import { RpcService } from "./services/rpc";
export declare class HyperchainSDK {
    nodeConfig: NodeConfig;
    rpcService: RpcService;
    actionRegistry: ActionRegistry;
    authRegistry: AuthRegistry;
    constructor(nodeConfig?: Partial<NodeConfig>);
}
