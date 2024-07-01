import { Id } from '@avalabs/avalanchejs';
import { Codec } from '../codec/codec';
import { Address } from '../utils/address';
import { Action } from './action';
export declare const TransferTxSize: number;
export declare class Transfer implements Action {
    to: Address;
    asset: Id;
    value: bigint;
    memo: Uint8Array;
    constructor(to: string, asset: string, value: bigint, memo: string);
    getTypeId(): number;
    size(): number;
    computeUnits(): number;
    stateKeysMaxChunks(): number[];
    toBytes(): Uint8Array;
    static fromBytes(bytes: Uint8Array): [Transfer, Error?];
    static fromBytesCodec(codec: Codec): [Transfer, Codec];
}
