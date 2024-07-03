interface SizeType {
    size(): number;
}
export declare function cummSize<T extends SizeType>(arr: T[]): number;
export declare function bytesLen(bytes: Uint8Array): number;
export declare function bytesLenSize(bytesSize: number): number;
export declare function stringLen(str: string): number;
export {};
