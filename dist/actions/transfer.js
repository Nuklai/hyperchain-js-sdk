"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = exports.TransferTxSize = void 0;
const consts_1 = require("../constants/consts");
const hypervm_1 = require("../constants/hypervm");
const address_1 = require("../utils/address");
const codec_1 = require("../utils/codec");
const utils_1 = require("../utils/utils");
exports.TransferTxSize = consts_1.ADDRESS_LEN + consts_1.ID_LEN + consts_1.UINT64_LEN + consts_1.INT_LEN + hypervm_1.MAX_MEMO_SIZE;
class Transfer {
    to;
    asset;
    value;
    memo;
    constructor(to, asset, value, memo) {
        this.to = address_1.Address.fromString(to);
        // Default asset to NAI if asset is "NAI"
        this.asset = (0, utils_1.toAssetID)(asset);
        this.value = value;
        this.memo = new TextEncoder().encode(memo);
    }
    getTypeId() {
        return hypervm_1.TRANSFER_ID;
    }
    size() {
        // We have to add INT_LEN because when packing bytes, we pack the length of the bytes
        return consts_1.ADDRESS_LEN + consts_1.ID_LEN + consts_1.UINT64_LEN + consts_1.INT_LEN + this.memo.length;
    }
    computeUnits() {
        return hypervm_1.TRANSFER_COMPUTE_UNITS;
    }
    stateKeysMaxChunks() {
        return [hypervm_1.STORAGE_BALANCE_CHUNKS, hypervm_1.STORAGE_BALANCE_CHUNKS];
    }
    toBytes() {
        const codec = codec_1.Codec.newWriter(this.size(), this.size());
        codec.packAddress(this.to);
        codec.packID(this.asset);
        codec.packUint64(this.value);
        codec.packBytes(this.memo);
        const bytes = codec.toBytes();
        return bytes;
    }
    static fromBytes(bytes) {
        const codec = codec_1.Codec.newReader(bytes, bytes.length);
        const to = codec.unpackAddress();
        const asset = codec.unpackID(false);
        const value = codec.unpackUint64(true);
        // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
        const memoBytes = codec.unpackLimitedBytes(hypervm_1.MAX_MEMO_SIZE);
        const memo = new TextDecoder().decode(memoBytes);
        const action = new Transfer(to.toString(), asset.toString(), value, memo);
        return [action, codec.getError()];
    }
    static fromBytesCodec(codec) {
        const codecResult = codec;
        const to = codecResult.unpackAddress();
        const asset = codecResult.unpackID(false);
        const value = codecResult.unpackUint64(true);
        // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
        const memoBytes = codecResult.unpackLimitedBytes(hypervm_1.MAX_MEMO_SIZE);
        const memo = new TextDecoder().decode(memoBytes);
        const action = new Transfer(to.toString(), asset.toString(), value, memo);
        return [action, codecResult];
    }
}
exports.Transfer = Transfer;
//# sourceMappingURL=transfer.js.map