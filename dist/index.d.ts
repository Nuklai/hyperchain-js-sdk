import { NodeConfig } from './config';
import { RpcService } from './services/rpc';
export * as actions from './actions';
export * as auth from './auth';
export * as codec from './codec';
export * as common from './common';
export * as config from './config';
export * as consts from './constants';
export * as crypto from './crypto';
export * as services from './services';
export * as transactions from './transactions';
export * as utils from './utils';
export declare class HyperchainSDK {
    nodeConfig: NodeConfig;
    rpcService: RpcService;
    constructor(nodeConfig?: Partial<NodeConfig>);
}
