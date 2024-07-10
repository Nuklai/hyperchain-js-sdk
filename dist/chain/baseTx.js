// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Codec } from '../codec/codec';
import { EMPTY_ID, ID_LEN, MillisecondsPerSecond, UINT64_LEN } from '../constants/consts';
export const BaseTxSize = 2 * UINT64_LEN + ID_LEN;
export class BaseTx {
    timestamp;
    chainId;
    maxFee;
    constructor(timestamp, chainId, maxFee) {
        this.timestamp = timestamp;
        this.chainId = chainId;
        this.maxFee = maxFee;
    }
    size() {
        return BaseTxSize;
    }
    toJSON() {
        return {
            timestamp: this.timestamp.toString(),
            chainId: this.chainId.toString(),
            maxFee: this.maxFee.toString()
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
    toBytes() {
        const codec = Codec.newWriter(this.size(), this.size());
        codec.packInt64(this.timestamp);
        codec.packID(this.chainId);
        codec.packUint64(this.maxFee);
        return codec.toBytes();
    }
    static fromBytes(bytes) {
        const codec = Codec.newReader(bytes, bytes.length);
        const timestamp = codec.unpackInt64(true);
        if (timestamp % MillisecondsPerSecond !== 0n) {
            return [
                new BaseTx(0n, EMPTY_ID, 0n),
                new Error('Timestamp is misaligned')
            ];
        }
        const chainId = codec.unpackID(true);
        const maxFee = codec.unpackUint64(true);
        const baseTx = new BaseTx(timestamp, chainId, maxFee);
        return [baseTx, codec.getError()];
    }
}
//# sourceMappingURL=baseTx.js.map