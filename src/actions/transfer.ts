// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { Id } from '@avalabs/avalanchejs'
import _ from 'lodash'
import { Codec } from '../codec/codec'
import { ADDRESS_LEN, ID_LEN, INT_LEN, UINT64_LEN } from '../constants/consts'
import {
  MAX_MEMO_SIZE,
  STORAGE_BALANCE_CHUNKS,
  TRANSFER_COMPUTE_UNITS,
  TRANSFER_ID
} from '../constants/hypervm'
import { Address } from '../utils/address'
import { toAssetID } from '../utils/utils'
import { Action } from './action'

export const TransferTxSize =
  ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + MAX_MEMO_SIZE

export class Transfer implements Action {
  public to: Address
  public asset: Id
  public value: bigint
  public memo: Uint8Array

  constructor(to: string, asset: string, value: bigint, memo: string) {
    this.to = Address.fromString(to)
    // Default asset to NAI if asset is "NAI"
    this.asset = toAssetID(asset)
    this.value = value
    this.memo = new TextEncoder().encode(memo)
  }

  getTypeId(): number {
    return TRANSFER_ID
  }

  size(): number {
    // We have to add INT_LEN because when packing bytes, we pack the length of the bytes
    return ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + this.memo.length
  }

  computeUnits(): number {
    return TRANSFER_COMPUTE_UNITS
  }

  stateKeysMaxChunks(): number[] {
    return [STORAGE_BALANCE_CHUNKS, STORAGE_BALANCE_CHUNKS]
  }

  toJSON(): object {
    return {
      to: this.to.toString(),
      asset: this.asset.toString(),
      value: this.value.toString(),
      memo: new TextDecoder().decode(this.memo)
    }
  }

  toString(): string {
    return JSON.stringify(this.toJSON())
  }

  toBytes(): Uint8Array {
    const codec = Codec.newWriter(this.size(), this.size())
    codec.packAddress(this.to)
    codec.packID(this.asset)
    codec.packUint64(this.value)
    codec.packBytes(this.memo)
    const bytes = codec.toBytes()
    return bytes
  }

  static fromBytes(bytes: Uint8Array): [Transfer, Error?] {
    const codec = Codec.newReader(bytes, bytes.length)
    const to = codec.unpackAddress()
    const asset = codec.unpackID(false)
    const value = codec.unpackUint64(true)

    // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
    const memoBytes = codec.unpackLimitedBytes(MAX_MEMO_SIZE, false)
    const memo = new TextDecoder().decode(memoBytes)

    const action = new Transfer(to.toString(), asset.toString(), value, memo)
    return [action, codec.getError()]
  }

  static fromBytesCodec(c: Codec): [Transfer, Codec] {
    const codec = _.cloneDeep(c)
    const to = codec.unpackAddress()
    const asset = codec.unpackID(false)
    const value = codec.unpackUint64(true)

    // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
    const memoBytes = codec.unpackLimitedBytes(MAX_MEMO_SIZE, false)
    const memo = new TextDecoder().decode(memoBytes)

    const action = new Transfer(to.toString(), asset.toString(), value, memo)
    return [action, codec]
  }
}
