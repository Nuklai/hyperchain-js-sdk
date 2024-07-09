// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
import { Id } from '@avalabs/avalanchejs';
import { ADDRESS_LEN, BYTE_LEN, EMPTY_ADDRESS, EMPTY_ID, ID_LEN, INT_LEN, LONG_LEN, MaxStringLen, SHORT_LEN } from '../constants/consts';
import { Address } from '../utils/address';
import { bufferEquals } from '../utils/utils';
const ErrInsufficientLength = new Error('packer has insufficient length for input');
const errNegativeOffset = new Error('negative offset');
const errInvalidInput = new Error('input does not match expected format');
const errBadBool = new Error('unexpected value when unpacking bool');
const errOversized = new Error('size is larger than limit');
const errNotPopulated = new Error('field is not populated');
export class Codec {
    buffer;
    offset;
    maxSize;
    error;
    constructor(bytes, maxSize = Infinity) {
        this.buffer = bytes || new Uint8Array();
        this.offset = 0;
        this.maxSize = maxSize;
    }
    static newWriter(initialBufferSize, maxSize) {
        return new Codec(new Uint8Array(initialBufferSize), maxSize);
    }
    static newReader(bytes, maxSize) {
        return new Codec(bytes, maxSize);
    }
    checkSpace(bytes) {
        if (this.offset < 0) {
            this.error = errNegativeOffset;
        }
        else if (bytes < 0) {
            this.error = errInvalidInput;
        }
        else if (this.buffer.length - this.offset < bytes) {
            this.error = ErrInsufficientLength;
        }
    }
    expand(bytes) {
        const neededSize = bytes + this.offset;
        if (neededSize <= this.buffer.length) {
            return;
        }
        if (neededSize > this.maxSize) {
            this.error = ErrInsufficientLength;
            return;
        }
        if (neededSize <= this.buffer.byteLength) {
            const newBuffer = new Uint8Array(this.buffer.byteLength);
            newBuffer.set(this.buffer);
            this.buffer = newBuffer.subarray(0, neededSize);
            return;
        }
        const newBuffer = new Uint8Array(neededSize);
        newBuffer.set(this.buffer);
        this.buffer = newBuffer;
    }
    packByte(value) {
        this.expand(BYTE_LEN);
        if (this.error)
            return;
        this.buffer[this.offset] = value;
        this.offset += BYTE_LEN;
    }
    unpackByte() {
        this.checkSpace(BYTE_LEN);
        if (this.error)
            return 0;
        const value = this.buffer[this.offset];
        this.offset += BYTE_LEN;
        return value;
    }
    packShort(value) {
        this.expand(SHORT_LEN);
        if (this.error)
            return;
        new DataView(this.buffer.buffer).setUint16(this.offset, value, false);
        this.offset += SHORT_LEN;
    }
    unpackShort() {
        this.checkSpace(SHORT_LEN);
        if (this.error)
            return 0;
        const value = new DataView(this.buffer.buffer).getUint16(this.offset, false);
        this.offset += SHORT_LEN;
        return value;
    }
    packInt(value) {
        this.expand(INT_LEN);
        if (this.error)
            return;
        new DataView(this.buffer.buffer).setUint32(this.offset, value, false);
        this.offset += INT_LEN;
    }
    unpackInt(required) {
        this.checkSpace(INT_LEN);
        if (this.error)
            return 0;
        const value = new DataView(this.buffer.buffer).getUint32(this.offset, false);
        this.offset += INT_LEN;
        if (required && value === 0) {
            this.addError(errNotPopulated);
        }
        return value;
    }
    packLong(value) {
        this.expand(LONG_LEN);
        if (this.error)
            return;
        new DataView(this.buffer.buffer).setBigUint64(this.offset, value, false);
        this.offset += LONG_LEN;
    }
    unpackLong() {
        this.checkSpace(LONG_LEN);
        if (this.error)
            return 0n;
        const value = new DataView(this.buffer.buffer).getBigUint64(this.offset, false);
        this.offset += LONG_LEN;
        return value;
    }
    packBool(value) {
        this.packByte(value ? 1 : 0);
    }
    unpackBool() {
        const b = this.unpackByte();
        if (b === 0)
            return false;
        if (b === 1)
            return true;
        this.error = errBadBool;
        return false;
    }
    packFixedBytes(bytes) {
        this.expand(bytes.length);
        if (this.error)
            return;
        this.buffer.set(bytes, this.offset);
        this.offset += bytes.length;
    }
    unpackFixedBytes(size) {
        this.checkSpace(size);
        if (this.error)
            return new Uint8Array();
        const bytes = this.buffer.slice(this.offset, this.offset + size);
        this.offset += size;
        return bytes;
    }
    packBytes(bytes) {
        this.packInt(bytes.length);
        this.packFixedBytes(bytes);
    }
    unpackBytes(required) {
        const size = this.unpackInt(required);
        const bytes = this.unpackFixedBytes(size);
        if (required && bytes.length === 0) {
            this.addError(new Error('Bytes field is not populated'));
        }
        return bytes;
    }
    unpackLimitedBytes(limit, required) {
        const size = this.unpackInt(required);
        console.log('Unpacked size:', size);
        console.log('Limit:', limit);
        if (size > limit) {
            this.error = errOversized;
            return new Uint8Array();
        }
        return this.unpackFixedBytes(size);
    }
    packStr(value) {
        const strBytes = new TextEncoder().encode(value);
        if (strBytes.length > MaxStringLen) {
            this.error = errInvalidInput;
            return;
        }
        this.packShort(strBytes.length);
        this.packFixedBytes(strBytes);
    }
    unpackStr(required) {
        const length = this.unpackShort();
        const string = new TextDecoder().decode(this.unpackFixedBytes(length));
        if (required && string === '') {
            this.addError(new Error('String field is not populated'));
        }
        return string;
    }
    unpackLimitedStr(limit) {
        const length = this.unpackShort();
        if (length > limit) {
            this.error = errOversized;
            return '';
        }
        return new TextDecoder().decode(this.unpackFixedBytes(length));
    }
    packID(id) {
        this.packFixedBytes(id.toBytes());
    }
    unpackID(required) {
        const id = this.unpackFixedBytes(ID_LEN);
        if (required && bufferEquals(id, EMPTY_ID.toBytes())) {
            this.addError(new Error('Id field is not populated'));
        }
        return Id.fromBytes(id)[0];
    }
    packUint64(value) {
        this.packLong(value);
    }
    unpackUint64(required) {
        const value = this.unpackLong();
        if (required && value === 0n) {
            this.addError(new Error('Uint64 field is not populated'));
        }
        return value;
    }
    packInt64(value) {
        this.packLong(value);
    }
    unpackInt64(required) {
        const value = this.unpackLong();
        if (required && value === 0n) {
            this.addError(new Error('Int64 field is not populated'));
        }
        return value;
    }
    packString(value) {
        this.packStr(value);
    }
    unpackString(required) {
        const value = this.unpackStr(required);
        if (required && value === '') {
            this.addError(new Error('String field is not populated'));
        }
        return value;
    }
    packAddress(address) {
        this.packFixedBytes(address.toBytes());
    }
    unpackAddress() {
        const address = this.unpackFixedBytes(ADDRESS_LEN);
        if (bufferEquals(address, EMPTY_ADDRESS.toBytes())) {
            this.addError(new Error('Address field is not populated'));
        }
        return Address.fromBytes(address)[0];
    }
    toBytes() {
        return this.buffer.slice(0, this.offset);
    }
    getOffset() {
        return this.offset;
    }
    hasError() {
        return this.error !== null;
    }
    getError() {
        return this.error;
    }
    addError(err) {
        if (!this.error) {
            this.error = err;
        }
    }
    empty() {
        return this.offset === this.buffer.length;
    }
}
//# sourceMappingURL=codec.js.map