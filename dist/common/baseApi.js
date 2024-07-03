// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { HYPERCHAIN_ENDPOINT, JSONRPC_ENDPOINT, MAINNET_PUBLIC_API_BASE_URL } from '../constants/endpoints';
import { JrpcProvider } from './rpc';
export class Api {
    path;
    base;
    fetchOptions;
    rpcProvider;
    constructor(baseURL = MAINNET_PUBLIC_API_BASE_URL, path = `${HYPERCHAIN_ENDPOINT}/${JSONRPC_ENDPOINT}`, base, fetchOptions) {
        this.path = path;
        this.base = base;
        this.fetchOptions = fetchOptions;
        this.rpcProvider = new JrpcProvider(baseURL + path);
    }
    setFetchOptions(options) {
        this.fetchOptions = options;
    }
    getMethodName = (methodName) => {
        if (!this.base) {
            return methodName;
        }
        return `${this.base}.${methodName}`;
    };
    callRpc = (methodName, params) => this.rpcProvider.callMethod(this.getMethodName(methodName), params, this.fetchOptions);
}
//# sourceMappingURL=baseApi.js.map