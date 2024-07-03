import { Action } from '../actions/action';
import { AuthFactory } from '../auth/auth';
import { Genesis } from '../common/models';
export type Dimension = number[];
export declare const FeeDimensions: number;
export declare const DimensionsLen: number;
export declare function dimensionToBytes(d: Dimension): Uint8Array;
export declare function dimensionFromBytes(bytes: Uint8Array): [Dimension, Error?];
export declare function mulSum(a: Dimension, b: Dimension): [bigint, Error?];
export declare function estimateUnits(genesisInfo: Genesis, actions: Action[], authFactory: AuthFactory): Dimension;
