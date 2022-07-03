/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any */
import { CaseReducer } from '@reduxjs/toolkit';
import {
  AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator,
} from '@reduxjs/toolkit/dist/createAsyncThunk';
import { APISlice, RequestStatus, RootState } from '../types';

export const pendingCaseReducer = <
  T,
  U,
  W extends keyof RootState,
  V extends RootState[W],
>(
  type: AsyncThunkPendingActionCreator<T, U>,
  func: CaseReducer<V, ReturnType<typeof type>> = () => {},
): [typeof type, typeof func] => [
  type,
  (state, payload) => {
    const key = type.type.split('/')[1];
    (state.requests as any)[key] = {
      requestId: (payload as any).meta.requestId,
      status: 'calling',
    };
    func?.(state, payload);
  },
];

export const fulfilledCaseReducer = <
  T,
  U,
  W extends keyof RootState,
  V extends RootState[W],
>(
  type: AsyncThunkFulfilledActionCreator<T, U>,
  func: CaseReducer<V, ReturnType<typeof type>> = () => {},
): [typeof type, typeof func] => [
  type,
  (state, payload) => {
    const key = type.type.split('/')[1];
    (state.requests as any)[key] = {
      ...(state.requests as any)[key],
      status: 'idle',
      success: true,
    };
    (state.requests as any)[key].requestId === payload.meta.requestId &&
      func?.(state, payload);
  },
];

export const rejectedCaseReducer = <
  T,
  U,
  W extends keyof RootState,
  V extends RootState[W],
>(
  type: AsyncThunkRejectedActionCreator<T, U>,
  func: CaseReducer<V, ReturnType<typeof type>> = () => {},
): [typeof type, typeof func] => [
  type,
  (state: any, payload: any) => {
    const key = type.type.split('/')[1];
    (state.requests as any)[key] = {
      ...(state.requests as any)[key],
      message:
        typeof payload.payload === 'string'
          ? payload.payload
          : payload.error.message,
      status: 'idle',
      success: false,
    };
    (state.requests as any)[key].requestId === payload.meta.requestId &&
      func?.(state, payload);
  },
];

export const generateRequestsObject = <T extends APISlice>(thunks: any) =>
  Object.fromEntries(
    Object.entries(thunks).map(([key]) => [
      key,
      { status: 'idle' } as RequestStatus,
    ]),
  ) as T['requests'];
