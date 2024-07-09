import { Id } from "@avalabs/avalanchejs";
import { Codec } from "../codec/codec";
import { ActionRegistry, AuthRegistry } from "./dependencies";
import { Transaction } from "./transaction";
export declare class StatefulBlock {
    prnt: Id;
    tmstmp: bigint;
    hght: bigint;
    txs: Transaction[];
    stateRoot: Id;
    size: number;
    authCounts: Map<number, number>;
    constructor(prnt: Id, tmstmp: bigint, hght: bigint, txs: Transaction[], stateRoot: Id, size: number, authCounts: Map<number, number>);
    getSize(): number;
    id(): Promise<Id>;
    toBytes(): [Uint8Array, Error?];
    static fromBytes(bytes: Uint8Array, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [StatefulBlock, Codec];
}
