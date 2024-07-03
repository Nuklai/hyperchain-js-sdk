// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import _ from 'lodash';
import { Codec } from '../codec/codec';
import { ADDRESS_LEN, ID_LEN, INT_LEN, UINT64_LEN } from '../constants/consts';
import { MAX_MEMO_SIZE, STORAGE_BALANCE_CHUNKS, TRANSFER_COMPUTE_UNITS, TRANSFER_ID } from '../constants/hypervm';
import { Address } from '../utils/address';
import { toAssetID } from '../utils/utils';
export const TransferTxSize = ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + MAX_MEMO_SIZE;
export class Transfer {
    to;
    asset;
    value;
    memo;
    constructor(to, asset, value, memo) {
        this.to = Address.fromString(to);
        // Default asset to NAI if asset is "NAI"
        this.asset = toAssetID(asset);
        this.value = value;
        this.memo = new TextEncoder().encode(memo);
    }
    getTypeId() {
        return TRANSFER_ID;
    }
    size() {
        // We have to add INT_LEN because when packing bytes, we pack the length of the bytes
        return ADDRESS_LEN + ID_LEN + UINT64_LEN + INT_LEN + this.memo.length;
    }
    computeUnits() {
        return TRANSFER_COMPUTE_UNITS;
    }
    stateKeysMaxChunks() {
        return [STORAGE_BALANCE_CHUNKS, STORAGE_BALANCE_CHUNKS];
    }
    toBytes() {
        const codec = Codec.newWriter(this.size(), this.size());
        codec.packAddress(this.to);
        codec.packID(this.asset);
        codec.packUint64(this.value);
        codec.packBytes(this.memo);
        const bytes = codec.toBytes();
        return bytes;
    }
    static fromBytes(bytes) {
        const codec = Codec.newReader(bytes, bytes.length);
        const to = codec.unpackAddress();
        const asset = codec.unpackID(false);
        const value = codec.unpackUint64(true);
        // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
        const memoBytes = codec.unpackLimitedBytes(MAX_MEMO_SIZE);
        const memo = new TextDecoder().decode(memoBytes);
        const action = new Transfer(to.toString(), asset.toString(), value, memo);
        return [action, codec.getError()];
    }
    static fromBytesCodec(c) {
        const codec = _.cloneDeep(c);
        const to = codec.unpackAddress();
        const asset = codec.unpackID(false);
        const value = codec.unpackUint64(true);
        // Ensure the memo is unpacked as fixed bytes of MAX_MEMO_SIZE
        const memoBytes = codec.unpackLimitedBytes(MAX_MEMO_SIZE);
        const memo = new TextDecoder().decode(memoBytes);
        const action = new Transfer(to.toString(), asset.toString(), value, memo);
        return [action, codec];
    }
}
//# sourceMappingURL=transfer.js.map