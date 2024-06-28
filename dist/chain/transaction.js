"use strict";
// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const avalanchejs_1 = require("@avalabs/avalanchejs");
const codec_1 = require("../codec/codec");
const consts_1 = require("../constants/consts");
const baseTx_1 = require("../transactions/baseTx");
const hashing_1 = require("../utils/hashing");
class Transaction {
    base;
    actions;
    auth;
    bytes = new Uint8Array();
    constructor(base, actions) {
        this.base = base;
        this.actions = actions;
    }
    calculateDigest() {
        const codec = codec_1.Codec.newWriter(this.size(), consts_1.NETWORK_SIZE_LIMIT);
        codec.packFixedBytes(this.base.toBytes());
        codec.packByte(this.actions.length);
        this.actions.forEach((action) => {
            const actionTypeId = action.getTypeId();
            codec.packByte(actionTypeId);
            codec.packFixedBytes(action.toBytes());
        });
        return [codec.toBytes(), codec.getError()];
    }
    sign(factory, actionRegistry, authRegistry) {
        let [msg, err] = this.calculateDigest();
        if (err) {
            return [this, err];
        }
        this.auth = factory.sign(msg);
        [this.bytes, err] = this.toBytes();
        if (err) {
            return [this, err];
        }
        return Transaction.fromBytes(this.bytes, actionRegistry, authRegistry);
    }
    toBytes() {
        if (this.bytes.length > 0) {
            return [this.bytes, undefined];
        }
        const codec = codec_1.Codec.newWriter(this.size(), consts_1.NETWORK_SIZE_LIMIT);
        // Pack the base transaction
        const baseBytes = this.base.toBytes();
        codec.packFixedBytes(baseBytes);
        // Pack the number of actions
        const numActions = this.actions.length;
        codec.packByte(numActions);
        // Pack each action
        this.actions.forEach((action) => {
            const actionTypeId = action.getTypeId();
            codec.packByte(actionTypeId);
            const actionBytes = action.toBytes();
            codec.packFixedBytes(actionBytes);
        });
        // Pack the auth if present
        if (this.auth) {
            const authTypeId = this.auth.getTypeId();
            codec.packByte(authTypeId);
            const authBytes = this.auth.toBytes();
            codec.packFixedBytes(authBytes);
        }
        return [codec.toBytes(), codec.getError()];
    }
    static fromBytes(bytes, actionRegistry, authRegistry) {
        let codec = codec_1.Codec.newReader(bytes, bytes.length);
        // Unpack the base transaction
        const baseBytes = codec.unpackFixedBytes(baseTx_1.BaseTxSize);
        let [base, err] = baseTx_1.BaseTx.fromBytes(baseBytes);
        if (err) {
            return [
                new Transaction(base, []),
                new Error(`Failed to unpack base transaction: ${err}`)
            ];
        }
        // Unpack the number of actions
        const numActions = codec.unpackByte();
        if (numActions === 0) {
            return [
                new Transaction(base, []),
                new Error('Transaction must have at least one action')
            ];
        }
        // Unpack each action
        const actions = [];
        for (let i = 0; i < numActions; i++) {
            const actionTypeId = codec.unpackByte();
            const [fromBytesAction, ok] = actionRegistry.lookupIndex(actionTypeId);
            if (!ok) {
                return [
                    new Transaction(base, []),
                    new Error(`Invalid action type: ${actionTypeId}`)
                ];
            }
            const [action, codecAction] = fromBytesAction(codec);
            if (codecAction.getError()) {
                return [
                    new Transaction(base, []),
                    new Error(`Failed to unpack action: ${err}`)
                ];
            }
            codec = codecAction;
            actions.push(action);
        }
        const transaction = new Transaction(base, actions);
        // Check if there are additional bytes for auth
        if (codec.getOffset() < bytes.length) {
            const authTypeId = codec.unpackByte();
            const [fromBytesAuth, ok] = authRegistry.lookupIndex(authTypeId);
            if (!ok) {
                return [
                    new Transaction(base, []),
                    new Error(`Invalid auth type: ${authTypeId}`)
                ];
            }
            const [auth, codecAuth] = fromBytesAuth(codec);
            if (codecAuth.getError()) {
                return [
                    new Transaction(base, []),
                    new Error(`Failed to unpack auth: ${err}`)
                ];
            }
            codec = codecAuth;
            transaction.auth = auth;
        }
        transaction.bytes = bytes;
        return [transaction, codec.getError()];
    }
    id() {
        return avalanchejs_1.Id.fromBytes((0, hashing_1.ToID)(this.bytes))[0];
    }
    size() {
        let size = this.base.size() + consts_1.BYTE_LEN; // BaseTx size + number of actions byte
        this.actions.forEach((action) => {
            const actionSize = consts_1.BYTE_LEN + action.size(); // Action type byte + action size
            size += actionSize;
        });
        if (this.auth) {
            const authSize = consts_1.BYTE_LEN + this.auth.size(); // Auth type byte + auth size
            size += authSize;
        }
        return size;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map