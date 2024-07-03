// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import bigInt from 'big-integer';
import { Codec } from '../codec/codec';
import { BYTE_LEN, UINT64_LEN, UINT8_LEN } from '../constants/consts';
import { STORAGE_BALANCE_CHUNKS } from '../constants/hypervm';
import { BaseTxSize } from './baseTx';
export const FeeDimensions = 5;
export const DimensionsLen = UINT64_LEN * FeeDimensions;
export function dimensionToBytes(d) {
    const codec = Codec.newWriter(DimensionsLen, DimensionsLen);
    for (let i = 0; i < FeeDimensions; i++) {
        codec.packUint64(BigInt(d[i]));
    }
    return codec.toBytes();
}
export function dimensionFromBytes(bytes) {
    const codec = Codec.newReader(bytes, DimensionsLen);
    const dimension = [];
    for (let i = 0; i < FeeDimensions; i++) {
        dimension.push(Number(codec.unpackUint64(true)));
    }
    return [dimension, codec.getError()];
}
function mul64(a, b) {
    return BigInt(a) * BigInt(b);
}
function add64(a, b) {
    return a + b;
}
export function mulSum(a, b) {
    let val = 0n;
    for (let i = 0; i < FeeDimensions; i++) {
        try {
            const v = mul64(a[i], b[i]);
            val = add64(val, v);
        }
        catch (err) {
            return [0n, err];
        }
    }
    return [val];
}
export function estimateUnits(genesisInfo, actions, authFactory) {
    let bandwidth = BaseTxSize;
    let stateKeysMaxChunks = [];
    let computeOp = bigInt(genesisInfo.baseUnits);
    let readsOp = bigInt(0);
    let allocatesOp = bigInt(0);
    let writesOp = bigInt(0);
    // Calculate over action/auth
    bandwidth += UINT8_LEN;
    actions.forEach((action) => {
        bandwidth += BYTE_LEN + action.size();
        const actionStateKeysMaxChunks = action.stateKeysMaxChunks();
        stateKeysMaxChunks = [...stateKeysMaxChunks, ...actionStateKeysMaxChunks];
        computeOp = computeOp.add(action.computeUnits());
    });
    bandwidth += BYTE_LEN + authFactory.bandwidth();
    const sponsorStateKeyMaxChunks = [STORAGE_BALANCE_CHUNKS];
    stateKeysMaxChunks = [...stateKeysMaxChunks, ...sponsorStateKeyMaxChunks];
    computeOp = computeOp.add(authFactory.computeUnits());
    // Estimate compute costs
    const compute = computeOp.valueOf();
    // Estimate storage costs
    for (const maxChunks of stateKeysMaxChunks) {
        // Compute key costs
        readsOp = readsOp.add(genesisInfo.storageKeyReadUnits);
        allocatesOp = allocatesOp.add(genesisInfo.storageKeyAllocateUnits);
        writesOp = writesOp.add(genesisInfo.storageKeyWriteUnits);
        // Compute value costs
        readsOp = readsOp.add(bigInt(maxChunks).multiply(bigInt(genesisInfo.storageValueReadUnits)));
        allocatesOp = allocatesOp.add(bigInt(maxChunks).multiply(bigInt(genesisInfo.storageValueAllocateUnits)));
        writesOp = writesOp.add(bigInt(maxChunks).multiply(bigInt(genesisInfo.storageValueWriteUnits)));
    }
    const reads = readsOp.valueOf();
    const allocates = allocatesOp.valueOf();
    const writes = writesOp.valueOf();
    return [bandwidth, compute, reads, allocates, writes];
}
//# sourceMappingURL=fees.js.map