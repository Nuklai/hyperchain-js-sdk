// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Id } from '@avalabs/avalanchejs';
import { BaseTx } from '../chain/baseTx';
import { estimateUnits, mulSum } from '../chain/fees';
import { Transaction } from '../chain/transaction';
import { Api } from '../common/baseApi';
import { COREAPI_METHOD_PREFIX, COREAPI_PATH } from '../constants/endpoints';
import { getUnixRMilli } from '../utils/utils';
export class RpcService extends Api {
    config;
    constructor(config) {
        super(config.baseApiUrl, `/ext/bc/${config.blockchainId}/${COREAPI_PATH}`, COREAPI_METHOD_PREFIX);
        this.config = config;
    }
    ping() {
        return this.callRpc('ping');
    }
    // Retrieve network IDs
    getNetworkInfo() {
        return this.callRpc('network');
    }
    // Get information about the last accepted block
    getLastAccepted() {
        return this.callRpc('lastAccepted');
    }
    // Fetch current unit prices for transactions
    getUnitPrices() {
        return this.callRpc('unitPrices');
    }
    // Fetch warp signatures associated with a transaction
    getWarpSignatures(txID) {
        return this.callRpc('getWarpSignatures', {
            txID
        });
    }
    // Submit a transaction to the network
    async submitTransaction(tx) {
        // Convert Uint8Array to base64 string
        const txBase64 = Array.from(tx);
        return this.callRpc('submitTx', { tx: txBase64 });
    }
    async generateTransaction(genesisInfo, actionRegistry, authRegistry, actions, authFactory) {
        try {
            // Construct the base transaction
            // Set timestamp
            const timestamp = getUnixRMilli(Date.now(), genesisInfo.validityWindow);
            // Set chain ID
            const chainId = Id.fromString(this.config.blockchainId);
            // Set maxFee
            const unitPrices = await this.getUnitPrices();
            const units = estimateUnits(genesisInfo, actions, authFactory);
            const [maxFee, error] = mulSum(unitPrices.unitPrices, units);
            if (error) {
                return {
                    submit: async () => {
                        throw new Error('Transaction failed, cannot submit.');
                    },
                    txSigned: {},
                    err: error
                };
            }
            const base = new BaseTx(timestamp, chainId, maxFee);
            const tx = new Transaction(base, actions);
            // Sign the transaction
            const [txSigned, err] = tx.sign(authFactory, actionRegistry, authRegistry);
            if (err) {
                return {
                    submit: async () => {
                        throw new Error('Transaction failed, cannot submit.');
                    },
                    txSigned: {},
                    err: err
                };
            }
            const submit = async () => {
                const [txBytes, err] = txSigned.toBytes();
                if (err) {
                    throw new Error(`Transaction failed, cannot submit. Err: ${err}`);
                }
                return await this.submitTransaction(txBytes);
            };
            return { submit, txSigned, err: undefined };
        }
        catch (error) {
            return {
                submit: async () => {
                    throw new Error('Transaction failed, cannot submit.');
                },
                txSigned: {},
                err: error
            };
        }
    }
}
//# sourceMappingURL=rpc.js.map