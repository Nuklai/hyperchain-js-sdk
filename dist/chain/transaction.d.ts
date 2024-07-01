import { Id } from '@avalabs/avalanchejs';
import { Action } from '../actions/action';
import { Auth, AuthFactory } from '../auth/auth';
import { BaseTx } from './baseTx';
import { ActionRegistry, AuthRegistry } from './dependencies';
export declare class Transaction {
    base: BaseTx;
    actions: Action[];
    auth?: Auth;
    private bytes;
    constructor(base: BaseTx, actions: Action[]);
    calculateDigest(): [Uint8Array, Error?];
    sign(factory: AuthFactory, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [Transaction, Error?];
    toBytes(): [Uint8Array, Error?];
    static fromBytes(bytes: Uint8Array, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [Transaction, Error?];
    id(): Id;
    size(): number;
}
