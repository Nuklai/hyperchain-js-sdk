// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { getPublicKey } from '@noble/ed25519';
import { randomBytes } from '@noble/hashes/utils';
import { Buffer } from 'buffer';
import _ from 'lodash';
import { Codec } from '../codec/codec';
import { EMPTY_ADDRESS } from '../constants/consts';
import { ED25519_COMPUTE_UNITS, ED25519_ID } from '../constants/hypervm';
import { PRIVATE_KEY_LENGTH, PUBLIC_KEY_LENGTH, SIGNATURE_LENGTH, sign, verify } from '../crypto/ed25519';
import { Address } from '../utils/address';
import { loadHex, toHex } from '../utils/hex';
import { bufferEquals } from '../utils/utils';
export const Ed25519AuthSize = PUBLIC_KEY_LENGTH + SIGNATURE_LENGTH;
export class ED25519 {
    signer;
    signature;
    addr = EMPTY_ADDRESS;
    constructor(signer, signature) {
        this.signer = signer;
        this.signature = signature;
    }
    address() {
        if (bufferEquals(this.addr.toBytes(), EMPTY_ADDRESS.toBytes())) {
            this.addr = Address.newAddress(ED25519_ID, this.signer);
        }
        return this.addr;
    }
    getTypeId() {
        return ED25519_ID;
    }
    async verify(message) {
        return verify(this.signer, this.signature, message);
    }
    actor() {
        return this.address();
    }
    sponsor() {
        return this.address();
    }
    size() {
        return Ed25519AuthSize;
    }
    toJSON() {
        return {
            signer: ED25519.publicKeyToHex(this.signer),
            signature: Buffer.from(this.signature).toString('hex'),
            addr: this.address().toString()
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
    toBytes() {
        const size = this.size();
        const codec = Codec.newWriter(size, size);
        codec.packFixedBytes(this.signer);
        codec.packFixedBytes(this.signature);
        return codec.toBytes();
    }
    static fromBytes(bytes) {
        const codec = Codec.newReader(bytes, bytes.length);
        const signer = codec.unpackFixedBytes(PUBLIC_KEY_LENGTH);
        const signature = codec.unpackFixedBytes(SIGNATURE_LENGTH);
        return [new ED25519(signer, signature), codec.getError()];
    }
    static fromBytesCodec(c) {
        const codec = _.cloneDeep(c);
        const signer = codec.unpackFixedBytes(PUBLIC_KEY_LENGTH);
        const signature = codec.unpackFixedBytes(SIGNATURE_LENGTH);
        return [new ED25519(signer, signature), codec];
    }
    static publicKeyToHex(publicKey) {
        return Buffer.from(publicKey).toString('hex');
    }
    static hexToPublicKey(hex) {
        return Buffer.from(hex, 'hex');
    }
}
export class ED25519Factory {
    privateKey;
    constructor(privateKey) {
        let privKey = randomBytes(32); // 32 bytes for a private key
        if (privateKey) {
            privKey = privateKey;
        }
        this.privateKey = privKey;
    }
    sign(message) {
        const publicKey = getPublicKey(this.privateKey);
        const signature = sign(message, this.privateKey);
        return new ED25519(publicKey, signature);
    }
    computeUnits() {
        return ED25519_COMPUTE_UNITS;
    }
    bandwidth() {
        return Ed25519AuthSize;
    }
    static generateKeyPair() {
        const privateKey = new ED25519Factory().privateKey;
        const publicKey = getPublicKey(privateKey);
        return { privateKey, publicKey };
    }
    static publicKeyFromPrivateKey(privateKey) {
        return getPublicKey(privateKey);
    }
    static privateKeyToHex(privateKey) {
        return Buffer.from(privateKey).toString('hex');
    }
    static hexToPrivateKey(hex) {
        let privateKeyBytes = Buffer.from(hex, 'hex');
        if (privateKeyBytes.length === PRIVATE_KEY_LENGTH + PUBLIC_KEY_LENGTH) {
            privateKeyBytes = privateKeyBytes.subarray(0, PRIVATE_KEY_LENGTH);
            return loadHex(toHex(privateKeyBytes), PRIVATE_KEY_LENGTH);
        }
        else if (privateKeyBytes.length !== PRIVATE_KEY_LENGTH) {
            throw new Error('Invalid combined key size');
        }
        return loadHex(hex, PRIVATE_KEY_LENGTH);
    }
}
//# sourceMappingURL=ed25519.js.map