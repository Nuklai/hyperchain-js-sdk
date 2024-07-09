// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { utils } from '@avalabs/avalanchejs';
import { sign as ed25519Sign, verify as ed25519Verify, etc } from '@noble/ed25519';
import { createHash as nodeCreateHash } from 'crypto';
import { createHash as browserCreateHash } from 'crypto-browserify';
import { isNodeEnvironment } from '../utils/utils';
const createHash = isNodeEnvironment() ? nodeCreateHash : browserCreateHash;
export const PUBLIC_KEY_LENGTH = 32;
export const PRIVATE_KEY_LENGTH = 32;
export const SIGNATURE_LENGTH = 64;
export function secretKeyFromBytes(skBytes) {
    return typeof skBytes === 'string' ? utils.hexToBuffer(skBytes) : skBytes;
}
export function secretKeyToBytes(sk) {
    return sk;
}
export function publicKeyFromBytes(pkBytes) {
    return typeof pkBytes === 'string' ? utils.hexToBuffer(pkBytes) : pkBytes;
}
export function publicKeyToBytes(pk) {
    return pk;
}
export function signatureFromBytes(sigBytes) {
    return sigBytes;
}
export function signatureToBytes(sig) {
    return sig;
}
export function verify(pk, sig, msg) {
    const message = typeof msg === 'string' ? utils.hexToBuffer(msg) : msg;
    return ed25519Verify(sig, message, pk);
}
export function sign(msg, sk) {
    const message = typeof msg === 'string' ? utils.hexToBuffer(msg) : msg;
    return ed25519Sign(message, sk);
}
// Set the synchronous SHA-512 function
etc.sha512Sync = (...messages) => {
    const hash = createHash('sha512');
    for (const message of messages) {
        hash.update(message);
    }
    return new Uint8Array(hash.digest());
};
//# sourceMappingURL=ed25519.js.map