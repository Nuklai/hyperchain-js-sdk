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
    registerBlocks(): Promise<void>;
    listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]>;
    registerTx(tx: Transaction): Promise<void>;
    listenTx(): Promise<[Id, Error?, Result?, Error?]>;
    close(): Promise<void>;
    private unpackBlockMessage;
    private unpackTxMessage;
}
