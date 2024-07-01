import { bls } from "@avalabs/avalanchejs";
import { Codec } from "../codec/codec";
import { Address } from "../utils/address";
import { Auth, AuthFactory } from "./auth";
export declare const BlsAuthSize: number;
export declare class BLS implements Auth {
    signer: bls.PublicKey;
    signature: bls.Signature;
    private addr;
    constructor(signer: bls.PublicKey, signature: bls.Signature);
    address(): Address;
    getTypeId(): number;
    verify(message: Uint8Array): Promise<boolean>;
    actor(): Address;
    sponsor(): Address;
    size(): number;
    toBytes(): Uint8Array;
    static fromBytes(bytes: Uint8Array): [BLS, Error?];
    static fromBytesCodec(codec: Codec): [BLS, Codec];
    static publicKeyToHex(publicKey: bls.PublicKey): string;
    static hexToPublicKey(hex: string): bls.PublicKey;
}
export declare class BLSFactory implements AuthFactory {
    privateKey: bls.SecretKey;
    constructor(privateKey?: bls.SecretKey);
    sign(message: Uint8Array): Auth;
    computeUnits(): number;
    bandwidth(): number;
    static generateKeyPair(): {
        privateKey: bls.SecretKey;
        publicKey: bls.PublicKey;
    };
    static publicKeyFromPrivateKey(privateKey: bls.SecretKey): bls.PublicKey;
    static privateKeyToHex(privateKey: bls.SecretKey): string;
    static hexToPrivateKey(hex: string): bls.SecretKey;
}