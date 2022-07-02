/* eslint-disable @typescript-eslint/ban-types */
import { AsyncThunk } from '@reduxjs/toolkit';
import {
  AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator,
} from '@reduxjs/toolkit/dist/createAsyncThunk';
import { initialCardsState } from '../../redux';
import { RootState } from '../../types';

export const mockInitialState: RootState = {
  cards: initialCardsState,
};

export const mockPendingAction = <
  Returned,
  ThunkArg,
  ThunkApiConfig,
  Params extends Parameters<
    AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig>
  > = Parameters<AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig>>,
>(
  type: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>,
  requestId: Params[0],
  params: Params[1],
  meta?: Params[2],
) => type.pending(requestId, params, meta);

export const mockFulfilledAction = <
  Returned,
  ThunkArg,
  ThinkApiConfig,
  Params extends Parameters<
    AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThinkApiConfig>
  > = Parameters<
    AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThinkApiConfig>
  >,
>(
  type: AsyncThunk<Returned, ThunkArg, ThinkApiConfig>,
  requestId: Params[1],
  params: Params[2],
  payload: Params[0],
  meta?: Params[3],
) => type.fulfilled(payload, requestId, params, meta);

export const mockRejectedAction = <
  Returned,
  ThunkArg,
  ThunkApiConfig,
  Params extends Parameters<
    AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>
  > = Parameters<AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>>,
>(
  type: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>,
  requestId: Params[1],
  params: Params[2],
  payload?: Params[3],
  error: Params[0] = null,
  meta?: Params[4],
) => type.rejected(error, requestId, params, payload, meta);
