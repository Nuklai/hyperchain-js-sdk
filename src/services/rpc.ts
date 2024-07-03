// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { Id } from '@avalabs/avalanchejs'
import { Action } from '../actions/action'
import { AuthFactory } from '../auth/auth'
import { BaseTx } from '../chain/baseTx'
import { ActionRegistry, AuthRegistry } from '../chain/dependencies'
import { estimateUnits, mulSum } from '../chain/fees'
import { Transaction } from '../chain/transaction'
import { Api } from '../common/baseApi'
import {
  Genesis,
  GetLastAcceptedResponse,
  GetNetworkInfoResponse,
  GetUnitPricesResponse,
  GetWarpSignaturesResponse,
  PingResponse,
  SubmitTransactionResponse
} from '../common/models'
import { NodeConfig } from '../config'
import { COREAPI_METHOD_PREFIX, JSONRPC_ENDPOINT } from '../constants/endpoints'
import { getUnixRMilli } from '../utils/utils'

export class RpcService extends Api {
  constructor(protected config: NodeConfig) {
    super(
      config.baseApiUrl,
      `/ext/bc/${config.blockchainId}/${JSONRPC_ENDPOINT}`,
      COREAPI_METHOD_PREFIX
    )
  }

  ping(): Promise<PingResponse> {
    return this.callRpc<PingResponse>('ping')
  }

  // Retrieve network IDs
  getNetworkInfo(): Promise<GetNetworkInfoResponse> {
    return this.callRpc<GetNetworkInfoResponse>('network')
  }

  // Get information about the last accepted block
  getLastAccepted(): Promise<GetLastAcceptedResponse> {
    return this.callRpc<GetLastAcceptedResponse>('lastAccepted')
  }

  // Fetch current unit prices for transactions
  getUnitPrices(): Promise<GetUnitPricesResponse> {
    return this.callRpc<GetUnitPricesResponse>('unitPrices')
  }

  // Fetch warp signatures associated with a transaction
  getWarpSignatures(txID: string): Promise<GetWarpSignaturesResponse> {
    return this.callRpc<GetWarpSignaturesResponse>('getWarpSignatures', {
      txID
    })
  }

  // Submit a transaction to the network
  async submitTransaction(tx: Uint8Array): Promise<SubmitTransactionResponse> {
    // Convert Uint8Array to base64 string
    const txBase64 = Array.from(tx)
    return this.callRpc<SubmitTransactionResponse>('submitTx', { tx: txBase64 })
  }

  async generateTransaction(
    genesisInfo: Genesis,
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry,
    actions: Action[],
    authFactory: AuthFactory
  ): Promise<{
    submit: () => Promise<SubmitTransactionResponse>
    txSigned: Transaction
    err: Error | undefined
  }> {
    try {
      // Construct the base transaction
      // Set timestamp
      const timestamp: bigint = getUnixRMilli(
        Date.now(),
        genesisInfo.validityWindow
      )
      // Set chain ID
      const chainId = Id.fromString(this.config.blockchainId)
      // Set maxFee
      const unitPrices: GetUnitPricesResponse = await this.getUnitPrices()
      const units = estimateUnits(genesisInfo, actions, authFactory)
      const [maxFee, error] = mulSum(unitPrices.unitPrices, units)
      if (error) {
        return {
          submit: async () => {
            throw new Error('Transaction failed, cannot submit.')
          },
          txSigned: {} as Transaction,
          err: error as Error
        }
      }

      const base = new BaseTx(timestamp, chainId, maxFee)

      const tx: Transaction = new Transaction(base, actions)

      // Sign the transaction
      const [txSigned, err] = tx.sign(authFactory, actionRegistry, authRegistry)
      if (err) {
        return {
          submit: async () => {
            throw new Error('Transaction failed, cannot submit.')
          },
          txSigned: {} as Transaction,
          err: err as Error
        }
      }

      const submit = async (): Promise<SubmitTransactionResponse> => {
        const [txBytes, err] = txSigned.toBytes()
        if (err) {
          throw new Error(`Transaction failed, cannot submit. Err: ${err}`)
        }
        return await this.submitTransaction(txBytes)
      }

      return { submit, txSigned, err: undefined }
    } catch (error) {
      return {
        submit: async () => {
          throw new Error('Transaction failed, cannot submit.')
        },
        txSigned: {} as Transaction,
        err: error as Error
      }
    }
  }
}
