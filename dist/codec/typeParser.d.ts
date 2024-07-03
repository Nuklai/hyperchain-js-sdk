import { Codec } from './codec';
export declare class TypeParser<T, Y> {
    private typeToIndex;
    private indexToDecoder;
    constructor();
    register(id: number, f: (codec: Codec) => [T, Codec], y: Y): void;
    lookupIndex(index: number): [(codec: Codec) => [T, Codec], boolean];
}
