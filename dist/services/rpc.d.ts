import { Action } from '../actions/action';
import { AuthFactory } from '../auth/auth';
import { ActionRegistry, AuthRegistry } from '../chain/dependencies';
import { Transaction } from '../chain/transaction';
import { Api } from '../common/baseApi';
import { Genesis, GetLastAcceptedResponse, GetNetworkInfoResponse, GetUnitPricesResponse, GetWarpSignaturesResponse, PingResponse, SubmitTransactionResponse } from '../common/models';
import { NodeConfig } from '../config';
export declare class RpcService extends Api {
    protected config: NodeConfig;
    constructor(config: NodeConfig);
    ping(): Promise<PingResponse>;
    getNetworkInfo(): Promise<GetNetworkInfoResponse>;
    getLastAccepted(): Promise<GetLastAcceptedResponse>;
    getUnitPrices(): Promise<GetUnitPricesResponse>;
    getWarpSignatures(txID: string): Promise<GetWarpSignaturesResponse>;
    submitTransaction(tx: Uint8Array): Promise<SubmitTransactionResponse>;
    generateTransaction(genesisInfo: Genesis, actionRegistry: ActionRegistry, authRegistry: AuthRegistry, actions: Action[], authFactory: AuthFactory): Promise<{
        submit: () => Promise<SubmitTransactionResponse>;
        txSigned: Transaction;
        err: Error | undefined;
    }>;
}
