import { Dimension } from '../chain/fees';
import { Codec } from '../codec/codec';
export declare class Result {
    success: boolean;
    error: Uint8Array;
    outputs: Array<Array<Uint8Array>>;
    units: Dimension;
    fee: bigint;
    constructor(success: boolean, error: Uint8Array, outputs: Array<Array<Uint8Array>>, units: Dimension, fee: bigint);
    size(): number;
    toBytes(codec: Codec): Codec;
    static resultsToBytes(src: Array<Result>): [Uint8Array, Error?];
    static fromBytes(codec: Codec): [Result, Error?];
    static resultsFromBytes(bytes: Uint8Array): [Array<Result>, Error?];
}
