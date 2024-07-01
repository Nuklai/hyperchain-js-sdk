"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcService = void 0;
const avalanchejs_1 = require("@avalabs/avalanchejs");
const baseTx_1 = require("../chain/baseTx");
const fees_1 = require("../chain/fees");
const transaction_1 = require("../chain/transaction");
const baseApi_1 = require("../common/baseApi");
const endpoints_1 = require("../constants/endpoints");
const utils_1 = require("../utils/utils");
class RpcService extends baseApi_1.Api {
    config;
    constructor(config) {
        super(config.baseApiUrl, `/ext/bc/${config.blockchainId}/${endpoints_1.COREAPI_PATH}`, endpoints_1.COREAPI_METHOD_PREFIX);
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
            const timestamp = (0, utils_1.getUnixRMilli)(Date.now(), genesisInfo.validityWindow);
            // Set chain ID
            const chainId = avalanchejs_1.Id.fromString(this.config.blockchainId);
            // Set maxFee
            const unitPrices = await this.getUnitPrices();
            const units = (0, fees_1.estimateUnits)(genesisInfo, actions, authFactory);
            const [maxFee, error] = (0, fees_1.mulSum)(unitPrices.unitPrices, units);
            if (error) {
                return {
                    submit: async () => {
                        throw new Error('Transaction failed, cannot submit.');
                    },
                    txSigned: {},
                    err: error
                };
            }
            const base = new baseTx_1.BaseTx(timestamp, chainId, maxFee);
            const tx = new transaction_1.Transaction(base, actions);
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
exports.RpcService = RpcService;
//# sourceMappingURL=rpc.js.map