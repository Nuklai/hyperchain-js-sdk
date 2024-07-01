"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToID = ToID;
exports.createActionID = createActionID;
const avalanchejs_1 = require("@avalabs/avalanchejs");
const consts_1 = require("../constants/consts");
const crypto_1 = require("crypto");
const crypto_browserify_1 = require("crypto-browserify");
const isNode = typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
const createHash = isNode ? crypto_1.createHash : crypto_browserify_1.createHash;
const HashLen = 32; // sha256 hash length in bytes
function ComputeHash256Array(buf) {
    const hash = createHash("sha256");
    hash.update(buf);
    return new Uint8Array(hash.digest());
}
function ComputeHash256(buf) {
    return ComputeHash256Array(buf);
}
function ToID(bytes) {
    return ComputeHash256(bytes);
}
function createActionID(txID, i) {
    if (txID.toBytes().length !== consts_1.ID_LEN) {
        throw new Error(`txID must be ${consts_1.ID_LEN} bytes long`);
    }
    if (i < 0 || i > 255) {
        throw new Error(`i must be a between 0 and 255`);
    }
    const actionBytes = new Uint8Array(consts_1.ID_LEN + consts_1.UINT8_LEN);
    actionBytes.set(txID.toBytes(), 0);
    actionBytes[consts_1.ID_LEN] = i;
    return avalanchejs_1.Id.fromBytes(ToID(actionBytes))[0];
}
//# sourceMappingURL=hashing.js.map