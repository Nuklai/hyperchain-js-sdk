// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { MaxUint8 } from '../constants/consts';
// Errors
const errTooManyItems = new Error('Too many items');
const errDuplicateItem = new Error('Duplicate item');
// TypeParser class
export class TypeParser {
    typeToIndex;
    indexToDecoder;
    constructor() {
        this.typeToIndex = new Map();
        this.indexToDecoder = new Map();
    }
    // Register a new type into TypeParser
    register(id, f, y) {
        if (this.indexToDecoder.size === MaxUint8 + 1) {
            throw errTooManyItems;
        }
        if (this.indexToDecoder.has(id)) {
            throw errDuplicateItem;
        }
        this.indexToDecoder.set(id, { f, y });
    }
    // LookupIndex returns the decoder function and success of lookup of [index]
    lookupIndex(index) {
        const decoder = this.indexToDecoder.get(index);
        if (decoder) {
            return [decoder.f, true];
        }
        // Return a no-op function to match the expected type signature
        const noop = (codec) => {
            return [undefined, codec];
        };
        return [noop, false];
    }
}
//# sourceMappingURL=typeParser.js.map