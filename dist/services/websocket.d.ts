import { Id } from '@avalabs/avalanchejs';
import { StatefulBlock } from '../chain/block';
import { ActionRegistry, AuthRegistry } from '../chain/dependencies';
import { Dimension } from '../chain/fees';
import { Result } from '../chain/result';
import { Transaction } from '../chain/transaction';
import { NodeConfig } from '../config';
export declare class WebSocketService {
    private config;
    private ws;
    private pendingBlocks;
    private pendingTxs;
    private closed;
    constructor(config: NodeConfig);
    connect(): Promise<void>;
    private getWebSocketUri;
    private handleMessage;
    registerBlocks(): Promise<void>;
    registerTx(tx: Transaction): Promise<void>;
    listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry): Promise<[StatefulBlock, Array<Result>, Dimension, Error?]>;
    listenTx(): Promise<[Id, Error?, Result?, Error?]>;
    close(): Promise<void>;
    isClosed(): boolean;
}
