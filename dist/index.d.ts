import { ActionRegistry, AuthRegistry } from "./chain/dependencies";
import { NodeConfig } from "./config";
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
export declare class HyperchainSDK {
    nodeConfig: NodeConfig;
    rpcService: RpcService;
    actionRegistry: ActionRegistry;
    authRegistry: AuthRegistry;
    constructor(nodeConfig?: Partial<NodeConfig>);
}
