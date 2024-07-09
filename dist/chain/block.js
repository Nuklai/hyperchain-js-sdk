// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Id } from "@avalabs/avalanchejs";
import { Codec } from "../codec/codec";
import { cummSize } from "../codec/utils";
import { EMPTY_ID, ID_LEN, NETWORK_SIZE_LIMIT, UINT64_LEN, WINDOW_ARRAY_SIZE } from "../constants/consts";
import { ToID } from "../utils/hashing";
import { Transaction } from "./transaction";
export class StatefulBlock {
    prnt;
    tmstmp;
    hght;
    txs;
    stateRoot;
    size;
    authCounts;
    constructor(prnt, tmstmp, hght, txs, stateRoot, size, authCounts) {
        this.prnt = prnt;
        this.tmstmp = tmstmp;
        this.hght = hght;
        this.txs = txs;
        this.stateRoot = stateRoot;
        this.size = size;
        this.authCounts = authCounts;
    }
    getSize() {
        return this.size;
    }
    async id() {
        const [blk, err] = this.toBytes();
        if (err) {
            return EMPTY_ID;
        }
        return Id.fromBytes(ToID(blk))[0];
    }
    toBytes() {
        const size = ID_LEN +
            UINT64_LEN +
            UINT64_LEN +
            UINT64_LEN +
            WINDOW_ARRAY_SIZE +
            cummSize(this.txs) +
            ID_LEN +
            UINT64_LEN +
            UINT64_LEN;
        const codec = Codec.newWriter(size, NETWORK_SIZE_LIMIT);
        codec.packID(this.prnt);
        codec.packInt64(this.tmstmp);
        codec.packUint64(this.hght);
        codec.packInt(this.txs.length);
        for (const tx of this.txs) {
            const [txBytes, err] = tx.toBytes();
            if (err) {
                return [new Uint8Array(), err];
            }
            codec.packFixedBytes(txBytes);
            this.authCounts.set(tx.auth.getTypeId(), (this.authCounts.get(tx.auth.getTypeId()) || 0) + 1);
        }
        codec.packID(this.stateRoot);
        const bytes = codec.toBytes();
        this.size = bytes.length;
        return [bytes, codec.getError()];
    }
    static fromBytes(bytes, actionRegistry, authRegistry) {
        const block = new StatefulBlock(EMPTY_ID, BigInt(0), BigInt(0), [], EMPTY_ID, 0, new Map());
        let codec = Codec.newReader(bytes, NETWORK_SIZE_LIMIT);
        block.size = bytes.length;
        block.prnt = codec.unpackID(false);
        block.tmstmp = codec.unpackInt64(false);
        block.hght = codec.unpackUint64(false);
        // Parse transactions
        const txCount = codec.unpackInt(false);
        block.authCounts = new Map();
        for (let i = 0; i < txCount; i++) {
            const [tx, c] = Transaction.fromBytesCodec(codec, actionRegistry, authRegistry);
            if (c.getError()) {
                return [block, c.getError()];
            }
            codec = c;
            block.txs.push(tx);
            if (tx.auth) {
                block.authCounts.set(tx.auth.getTypeId(), (block.authCounts.get(tx.auth.getTypeId()) || 0) + 1);
            }
        }
        block.stateRoot = codec.unpackID(false);
        // Ensure no leftover bytes
        if (!codec.empty()) {
            throw new Error(`Invalid object: remaining=${bytes.length - codec.getOffset()}`);
        }
        return [block, codec.getError()];
    }
}
//# sourceMappingURL=block.js.map