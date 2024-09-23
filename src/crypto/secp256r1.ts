// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { utils } from '@avalabs/avalanchejs'
import { ec as EC } from 'elliptic'
import { randomBytes } from '@noble/hashes/utils'
import { getSha256 } from '../utils/cryptoUtils'

const ec = new EC('p256')

export type PublicKey = Uint8Array
export type SecretKey = Uint8Array
export type Signature = Uint8Array
export type Message = Uint8Array

export const PUBLIC_KEY_LENGTH = 65  // Uncompressed public key
export const PRIVATE_KEY_LENGTH = 32
export const SIGNATURE_LENGTH = 64

export function secretKeyFromBytes(skBytes: Uint8Array | string): SecretKey {
    return typeof skBytes === 'string' ? utils.hexToBuffer(skBytes) : skBytes
}

export function secretKeyToBytes(sk: SecretKey): Uint8Array {
    return sk
}

export function publicKeyFromBytes(pkBytes: Uint8Array | string): PublicKey {
    return typeof pkBytes === 'string' ? utils.hexToBuffer(pkBytes) : pkBytes
}

export function publicKeyToBytes(pk: PublicKey): Uint8Array {
    return pk
}

export function signatureFromBytes(sigBytes: Uint8Array): Signature {
    return sigBytes
}

export function signatureToBytes(sig: Signature): Uint8Array {
    return sig
}

export function verify(
    pk: PublicKey,
    sig: Signature,
    msg: Uint8Array | string
): boolean {
    const message = typeof msg === 'string' ? utils.hexToBuffer(msg) : msg
    const key = ec.keyFromPublic(pk)
    return key.verify(message, { r: sig.slice(0, 32), s: sig.slice(32, 64) })
}

export function sign(msg: Uint8Array | string, sk: SecretKey): Uint8Array {
    const message = typeof msg === 'string' ? utils.hexToBuffer(msg) : msg
    const key = ec.keyFromPrivate(sk)
    const signature = key.sign(message)
    const r = signature.r.toArrayLike(Buffer, 'be', 32)
    const s = signature.s.toArrayLike(Buffer, 'be', 32)
    return Buffer.concat([r, s])
}

export function getPublicKey(privateKey: SecretKey): PublicKey {
    const key = ec.keyFromPrivate(privateKey)
    return Buffer.from(key.getPublic('array'))
}

// Set the synchronous SHA-256 function
const sha256 = getSha256()