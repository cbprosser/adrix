import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { searchCard } from '../../axios';
import { CardsState } from '../../types';
import {
  fulfilledCaseReducer,
  notError,
  pendingCaseReducer,
  rejectedCaseReducer,
} from '../../util';

const builders: ((builder: ActionReducerMapBuilder<CardsState>) => void)[] = [];

export const searchForCard = createAsyncThunk(
  'cards/searchForCard',
  async (query: string, { rejectWithValue }) => {
    const resp = await searchCard({ q: query });
    let message: string | undefined;

    // TODO: Add response status utility
    if (resp.status >= 200 && resp.status < 300 && notError(resp.data)) {
      if (resp.data.data.length === 1) return resp.data;
      message = 'Too many cards found';
    }
    return rejectWithValue(message ?? 'Card not found');
  },
);

builders.push((builder) =>
  builder
    .addCase(
      ...pendingCaseReducer(searchForCard.pending, (state) => {
        state.cards = [];
      }),
    )
    .addCase(
      ...fulfilledCaseReducer(searchForCard.fulfilled, (state, { payload }) => {
        state.cards = payload.data;
      }),
    )
    .addCase(...rejectedCaseReducer(searchForCard.rejected)),
);

export const cardsBuilder = (builder: ActionReducerMapBuilder<CardsState>) => {
  builders.forEach((builderFunction) => {
    builderFunction(builder);
  });
};

export const cardThunks = { searchForCard };
