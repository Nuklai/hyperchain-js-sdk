// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

export type PingResponse = {
  success: boolean
}

export type GetNetworkInfoResponse = {
  networkId: number
  subnetId: string
  chainId: string
}

export type GetLastAcceptedResponse = {
  blockId: string
  height: number
  timestamp: number
}

export type GetUnitPricesResponse = {
  unitPrices: number[]
}

export type SubmitTransactionResponse = {
  txId: string
}

export type WarpValidator = {
  nodeId: string
  publicKey: Uint8Array
  weight: number
}

export type WarpSignature = {
  publicKey: Uint8Array
  signature: Uint8Array
}

export type UnsignedMessage = {
  networkId: number
  sourceChainId: string
  payload: Uint8Array
}

export type GetWarpSignaturesResponse = {
  validators: WarpValidator[]
  message: UnsignedMessage
  signatures: WarpSignature[]
}

export type CustomAllocation = {
  address: string
  balance: number
}

export type Genesis = {
  stateBranchFactor: number
  minBlockGap: number
  minEmptyBlockGap: number
  minUnitPrice: Uint8Array
  unitPriceChangeDenominator: Uint8Array
  windowTargetUnits: Uint8Array
  maxBlockUnits: Uint8Array
  validityWindow: number
  baseUnits: number
  baseWarpUnits: number
  warpUnitsPerSigner: number
  outgoingWarpComputeUnits: number
  storageKeyReadUnits: number
  storageValueReadUnits: number
  storageKeyAllocateUnits: number
  storageValueAllocateUnits: number
  storageKeyWriteUnits: number
  storageValueWriteUnits: number
  customAllocation: CustomAllocation[]
}
