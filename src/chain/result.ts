// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import {
  Dimension,
  DimensionsLen,
  dimensionFromBytes,
  dimensionToBytes
} from '../chain/fees'
import { Codec } from '../codec/codec'
import { bytesLen, cummSize } from '../codec/utils'
import {
  BOOL_LEN,
  INT_LEN,
  MaxInt,
  UINT64_LEN,
  UINT8_LEN
} from '../constants/consts'

export class Result {
  public success: boolean
  public error: Uint8Array
  public outputs: Array<Array<Uint8Array>>
  public units: Dimension
  public fee: bigint

  constructor(
    success: boolean,
    error: Uint8Array,
    outputs: Array<Array<Uint8Array>>,
    units: Dimension,
    fee: bigint
  ) {
    this.success = success
    this.error = error
    this.outputs = outputs
    this.units = units
    this.fee = fee
  }

  size(): number {
    let outputSize = UINT8_LEN
    for (const action of this.outputs) {
      outputSize += UINT8_LEN
      for (const output of action) {
        outputSize += bytesLen(output)
      }
    }
    return (
      BOOL_LEN + bytesLen(this.error) + outputSize + DimensionsLen + UINT64_LEN
    )
  }

  toBytes(codec: Codec): Codec {
    const codecResult = codec
    codecResult.packBool(this.success)
    codecResult.packBytes(this.error)
    codecResult.packByte(this.outputs.length)
    for (const outputs of this.outputs) {
      codecResult.packByte(outputs.length)
      for (const output of outputs) {
        codecResult.packBytes(output)
      }
    }
    codecResult.packFixedBytes(dimensionToBytes(this.units))
    codecResult.packUint64(this.fee)
    return codecResult
  }

  static resultsToBytes(src: Array<Result>): [Uint8Array, Error?] {
    const size = INT_LEN + cummSize(src)
    let codec = Codec.newWriter(size, MaxInt)
    codec.packInt(src.length)
    for (const result of src) {
      codec = result.toBytes(codec)
    }
    return [codec.toBytes(), codec.getError()]
  }

  static fromBytes(codec: Codec): [Result, Error?] {
    const success = codec.unpackBool()
    console.log('Unpacked success:', success)
    const error = codec.unpackLimitedBytes(MaxInt, false)
    console.log('Unpacked error:', error)
    if (codec.getError()) {
      return [new Result(false, new Uint8Array(), [], [], 0n), codec.getError()]
    }
    const numActions = codec.unpackByte()
    console.log('Unpacked numActions:', numActions)
    const outputs = []
    for (let i = 0; i < numActions; i++) {
      const numOutputs = codec.unpackByte()
      console.log('Unpacked numOutputs:', numOutputs)
      const actionOutputs = []
      for (let j = 0; j < numOutputs; j++) {
        const output = codec.unpackLimitedBytes(MaxInt, false)
        console.log('Unpacked output:', output)
        actionOutputs.push(output)
      }
      outputs.push(actionOutputs)
    }
    const consumedRaw = codec.unpackFixedBytes(DimensionsLen)
    console.log('Unpacked consumedRaw:', consumedRaw)
    const [units, err] = dimensionFromBytes(consumedRaw)
    console.log('Unpacked units:', units)
    if (err) {
      return [new Result(false, new Uint8Array(), [], [], 0n), err]
    }
    const fee = codec.unpackUint64(true)
    console.log('Unpacked fee:', fee)
    return [new Result(success, error, outputs, units, fee), codec.getError()]
  }

  static resultsFromBytes(bytes: Uint8Array): [Array<Result>, Error?] {
    const codec = Codec.newReader(bytes, MaxInt)
    const items = codec.unpackInt(false)
    const results: Array<Result> = []
    for (let i = 0; i < items; i++) {
      const [resultBytes, err] = Result.fromBytes(codec)
      if (err) {
        return [[], err]
      }
      results.push(resultBytes)
    }
    if (!codec.empty()) {
      throw new Error('Invalid object')
    }
    return [results, codec.getError()]
  }
}
