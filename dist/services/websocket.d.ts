import { Id } from '@avalabs/avalanchejs';
import { StatefulBlock } from '../chain/block';
import { ActionRegistry, AuthRegistry } from '../chain/dependencies';
import { Dimension } from '../chain/fees';
import { Result } from '../chain/result';
import { Transaction } from '../chain/transaction';
import { NodeConfig } from '../config';
export declare class WebSocketService {
    uri: string;
    private conn;
    private mb;
    private readStopped;
    private writeStopped;
    private pendingBlocks;
    private pendingTxs;
    private startedClose;
    private closed;
    private err;
    constructor(config: NodeConfig);
    connect(): Promise<void>;
    private getWebSocketUri;
    private readLoop;
    private writeLoop;
    registerBlocks(): Promise<Error | undefined>;
    listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry): Promise<{
        block: StatefulBlock;
        results: Array<Result>;
        prices: Dimension;
        err: Error | undefined;
    }>;
    registerTx(tx: Transaction): Promise<Error | undefined>;
    listenTx(): Promise<{
        txId: Id;
        dErr: Error | undefined;
        result: Result | undefined;
        err: Error | undefined;
    }>;
    close(): Promise<void>;
    private unpackBlockMessage;
    private unpackTxMessage;
}
