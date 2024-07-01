"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHex = isHex;
exports.toHex = toHex;
exports.loadHex = loadHex;
const buffer_1 = require("buffer");
function isHex(str) {
    const hexRegex = /^[0-9a-fA-F]+$/;
    return hexRegex.test(str);
}
// ToHex converts a byte to a hex string.
function toHex(b) {
    return buffer_1.Buffer.from(b).toString("hex");
}
// LoadHex Converts hex encoded string into bytes. Returns
// an error if key is invalid.
function loadHex(s, expectedSize) {
    const bytes = buffer_1.Buffer.from(s, "hex");
    if (expectedSize !== -1 && bytes.length !== expectedSize) {
        throw new Error("Invalid size");
    }
    return new Uint8Array(bytes);
}
//# sourceMappingURL=hex.js.map