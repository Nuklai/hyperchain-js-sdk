// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { bls } from '@avalabs/avalanchejs';
import { bls12_381 } from '@noble/curves/bls12-381';
import { randomBytes } from '@noble/hashes/utils';
import { Buffer } from 'buffer';
import _ from 'lodash';
import { Codec } from '../codec/codec';
import { EMPTY_ADDRESS } from '../constants/consts';
import { BLS_COMPUTE_UNITS, BLS_ID } from '../constants/hypervm';
import { Address } from '../utils/address';
import { bufferEquals } from '../utils/utils';
export const BlsAuthSize = bls.PUBLIC_KEY_LENGTH + bls.SIGNATURE_LENGTH;
export class BLS {
    signer;
    signature;
    addr = EMPTY_ADDRESS;
    constructor(signer, signature) {
        this.signer = signer;
        this.signature = signature;
    }
    address() {
        if (bufferEquals(this.addr.toBytes(), EMPTY_ADDRESS.toBytes())) {
            this.addr = Address.newAddress(BLS_ID, bls.publicKeyToBytes(this.signer));
        }
        return this.addr;
    }
    getTypeId() {
        return BLS_ID;
    }
    async verify(message) {
        return bls.verify(this.signer, this.signature, message);
    }
    actor() {
        return this.address();
    }
    sponsor() {
        return this.address();
    }
    size() {
        return BlsAuthSize;
    }
    toJSON() {
        return {
            signer: BLS.publicKeyToHex(this.signer),
            signature: Buffer.from(bls.signatureToBytes(this.signature)).toString('hex'),
            address: this.address().toString()
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
    toBytes() {
        const size = this.size();
        const codec = Codec.newWriter(size, size);
        const signerBytes = bls.publicKeyToBytes(this.signer);
        codec.packFixedBytes(signerBytes);
        const signatureBytes = bls.signatureToBytes(this.signature);
        codec.packFixedBytes(signatureBytes);
        return codec.toBytes();
    }
    static fromBytes(bytes) {
        const codec = Codec.newReader(bytes, bytes.length);
        const signer = bls.publicKeyFromBytes(codec.unpackFixedBytes(bls.PUBLIC_KEY_LENGTH));
        const signature = bls.signatureFromBytes(codec.unpackFixedBytes(bls.SIGNATURE_LENGTH));
        return [new BLS(signer, signature), codec.getError()];
    }
    static fromBytesCodec(c) {
        const codec = _.cloneDeep(c);
        const signer = bls.publicKeyFromBytes(codec.unpackFixedBytes(bls.PUBLIC_KEY_LENGTH));
        const signature = bls.signatureFromBytes(codec.unpackFixedBytes(bls.SIGNATURE_LENGTH));
        return [new BLS(signer, signature), codec];
    }
    static publicKeyToHex(publicKey) {
        return Buffer.from(bls.publicKeyToBytes(publicKey)).toString('hex');
    }
    static hexToPublicKey(hex) {
        return bls.publicKeyFromBytes(Buffer.from(hex, 'hex'));
    }
}
export class BLSFactory {
    privateKey;
    constructor(privateKey) {
        let privKey = bls.secretKeyFromBytes(randomBytes(32)); // 32 bytes for a private key
        if (privateKey) {
            privKey = privateKey;
        }
        this.privateKey = privKey;
    }
    sign(message) {
        const signer = BLSFactory.publicKeyFromPrivateKey(this.privateKey);
        const signature = bls.sign(message, this.privateKey);
        return new BLS(signer, bls.signatureFromBytes(signature));
    }
    computeUnits() {
        return BLS_COMPUTE_UNITS;
    }
    bandwidth() {
        return BlsAuthSize;
    }
    static generateKeyPair() {
        const privateKey = new BLSFactory().privateKey;
        const publicKey = BLSFactory.publicKeyFromPrivateKey(privateKey);
        return { privateKey, publicKey };
    }
    static publicKeyFromPrivateKey(privateKey) {
        const publicKeyBytes = bls12_381.getPublicKey(privateKey);
        return bls.publicKeyFromBytes(publicKeyBytes);
    }
    static privateKeyToHex(privateKey) {
        return Buffer.from(bls.secretKeyToBytes(privateKey)).toString('hex');
    }
    static hexToPrivateKey(hex) {
        return bls.secretKeyFromBytes(Buffer.from(hex, 'hex'));
    }
}
//# sourceMappingURL=bls.js.map