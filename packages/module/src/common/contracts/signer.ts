import { DataSignature, UTxO } from '@mesh/common/types';

export interface ISigner {
  signData(address: string, payload: string): SometimesPromise<DataSignature>;
  signTx(unsignedTx: string, partialSign: boolean, accountIndex: number, inputUtxos: UTxO[] | undefined, signWithBaseAddress: boolean): SometimesPromise<string>;
}

type SometimesPromise<T> = Promise<T> | T;
