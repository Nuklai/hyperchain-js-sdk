// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { INT_LEN } from '../constants/consts';
export function cummSize(arr) {
    let size = 0;
    for (const item of arr) {
        size += item.size();
    }
    return size;
}
export function bytesLen(bytes) {
    return INT_LEN + bytes.length;
}
export function bytesLenSize(bytesSize) {
    return INT_LEN + bytesSize;
}
export function stringLen(str) {
    return INT_LEN + str.length;
}
//# sourceMappingURL=utils.js.map