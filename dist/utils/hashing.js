// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Id } from '@avalabs/avalanchejs';
import { createHash as nodeCreateHash } from 'crypto';
import { createHash as browserCreateHash } from 'crypto-browserify';
import { ID_LEN, UINT8_LEN } from '../constants/consts';
import { isNodeEnvironment } from './utils';
const createHash = isNodeEnvironment() ? nodeCreateHash : browserCreateHash;
const HashLen = 32; // sha256 hash length in bytes
function ComputeHash256Array(buf) {
    const hash = createHash('sha256');
    hash.update(buf);
    return new Uint8Array(hash.digest());
}
function ComputeHash256(buf) {
    return ComputeHash256Array(buf);
}
export function ToID(bytes) {
    return ComputeHash256(bytes);
}
export function createActionID(txID, i) {
    if (txID.toBytes().length !== ID_LEN) {
        throw new Error(`txID must be ${ID_LEN} bytes long`);
    }
    if (i < 0 || i > 255) {
        throw new Error(`i must be a between 0 and 255`);
    }
    const actionBytes = new Uint8Array(ID_LEN + UINT8_LEN);
    actionBytes.set(txID.toBytes(), 0);
    actionBytes[ID_LEN] = i;
    return Id.fromBytes(ToID(actionBytes))[0];
}
//# sourceMappingURL=hashing.js.map