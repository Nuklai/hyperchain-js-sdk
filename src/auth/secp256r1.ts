import { randomBytes } from '@noble/hashes/utils'
import { Buffer } from 'buffer'
import _ from 'lodash'
import { Codec } from '../codec'
import { EMPTY_ADDRESS } from '../constants'
import { SECP256R1_COMPUTE_UNITS, SECP256R1_ID } from '../constants'
import { Address } from '../utils'
import { bufferEquals } from '../utils'
import { Auth, AuthFactory } from './auth'
import * as secp256r1Crypto from '../crypto/secp256r1'

export const SECP256R1AuthSize = secp256r1Crypto.PUBLIC_KEY_LENGTH + secp256r1Crypto.SIGNATURE_LENGTH

export class SECP256R1 implements Auth {
    public signer: secp256r1Crypto.PublicKey
    public signature: secp256r1Crypto.Signature
    private addr: Address = EMPTY_ADDRESS

    constructor(signer: secp256r1Crypto.PublicKey, signature: secp256r1Crypto.Signature) {
        this.signer = signer
        this.signature = signature
    }

    address(): Address {
        if (bufferEquals(this.addr.toBytes(), EMPTY_ADDRESS.toBytes())) {
            this.addr = Address.newAddress(SECP256R1_ID, this.signer)
        }
        return this.addr
    }

    getTypeId(): number {
        return SECP256R1_ID
    }

    async verify(message: Uint8Array): Promise<boolean> {
        return secp256r1Crypto.verify(this.signer, this.signature, message)
    }

    actor(): Address {
        return this.address()
    }

    sponsor(): Address {
        return this.address()
    }

    size(): number {
        return SECP256R1AuthSize
    }

    toJSON(): object {
        return {
            signer: Buffer.from(this.signer).toString('hex'),
            signature: Buffer.from(this.signature).toString('hex'),
            address: this.address().toString()
        }
    }

    toString(): string {
        return JSON.stringify(this.toJSON())
    }

    toBytes(): Uint8Array {
        const size = this.size()
        const codec = Codec.newWriter(size, size)
        codec.packFixedBytes(this.signer)
        codec.packFixedBytes(this.signature)
        return codec.toBytes()
    }

    static fromBytes(bytes: Uint8Array): [SECP256R1, Error?] {
        const codec = Codec.newReader(bytes, bytes.length)
        const signer = codec.unpackFixedBytes(secp256r1Crypto.PUBLIC_KEY_LENGTH)
        const signature = codec.unpackFixedBytes(secp256r1Crypto.SIGNATURE_LENGTH)
        return [new SECP256R1(signer, signature), codec.getError()]
    }

    static fromBytesCodec(c: Codec): [SECP256R1, Codec] {
        const codec = _.cloneDeep(c)
        const signer = codec.unpackFixedBytes(secp256r1Crypto.PUBLIC_KEY_LENGTH)
        const signature = codec.unpackFixedBytes(secp256r1Crypto.SIGNATURE_LENGTH)
        return [new SECP256R1(signer, signature), codec]
    }
}

export class SECP256R1Factory implements AuthFactory {
    privateKey: secp256r1Crypto.SecretKey

    constructor(privateKey?: secp256r1Crypto.SecretKey) {
        this.privateKey = privateKey || randomBytes(secp256r1Crypto.PRIVATE_KEY_LENGTH)
    }

    sign(message: Uint8Array): Auth {
        const publicKey = secp256r1Crypto.getPublicKey(this.privateKey)
        const signature = secp256r1Crypto.sign(message, this.privateKey)
        return new SECP256R1(publicKey, signature)
    }

    computeUnits(): number {
        return SECP256R1_COMPUTE_UNITS
    }

    bandwidth(): number {
        return SECP256R1AuthSize
    }

    static async generateKeyPair(): Promise<{
        privateKey: secp256r1Crypto.SecretKey
        publicKey: secp256r1Crypto.PublicKey
    }> {
        const privateKey = randomBytes(secp256r1Crypto.PRIVATE_KEY_LENGTH)
        const publicKey = secp256r1Crypto.getPublicKey(privateKey)
        return { privateKey, publicKey }
    }

    static publicKeyFromPrivateKey(privateKey: secp256r1Crypto.SecretKey): secp256r1Crypto.PublicKey {
        return secp256r1Crypto.getPublicKey(privateKey)
    }

    static privateKeyToHex(privateKey: secp256r1Crypto.SecretKey): string {
        return Buffer.from(privateKey).toString('hex')
    }

    static hexToPrivateKey(hex: string): secp256r1Crypto.SecretKey {
        return secp256r1Crypto.secretKeyFromBytes(hex)
    }
}