// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { TypeSymbols, utils } from '@avalabs/avalanchejs';
import { ADDRESS_LEN } from '../constants/consts';
import { BLS_ID, ED25519_ID, HRP, SECP256R1_ID } from '../constants/hypervm';
import { ToID } from './hashing';
export class Address {
    address;
    _type = TypeSymbols.Address;
    constructor(address) {
        this.address = address;
        this.address = address;
    }
    static fromBytes(buf) {
        return [new Address(buf.slice(0, ADDRESS_LEN)), buf.slice(ADDRESS_LEN)];
    }
    toJSON(hrp = HRP) {
        return this.toString(hrp);
    }
    //decodes from bech32 Addresses
    static fromString(addr) {
        return new Address(utils.parseBech32(addr)[1]);
    }
    static fromHex(hex) {
        return new Address(utils.hexToBuffer(hex));
    }
    toHex() {
        return utils.bufferToHex(this.address);
    }
    toBytes() {
        return utils.padLeft(this.address, ADDRESS_LEN);
    }
    toString(hrp = HRP) {
        return utils.formatBech32(hrp, this.address);
    }
    value() {
        return this.toString();
    }
    static newAddress(authTypeID, publicKeyBytes) {
        if (![ED25519_ID, SECP256R1_ID, BLS_ID].includes(authTypeID)) {
            throw new Error('invalid auth type');
        }
        const address = new Uint8Array(ADDRESS_LEN);
        address[0] = authTypeID;
        address.set(ToID(publicKeyBytes), 1);
        return Address.fromBytes(address)[0];
    }
    static formatAddress(address) {
        return utils.formatBech32(HRP, address);
    }
    static parseAddress(address) {
        return utils.parseBech32(address)[1];
    }
}
//# sourceMappingURL=address.js.map