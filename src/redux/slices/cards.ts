import { createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../types';
import { cardsBuilder } from '../thunks';

// TODO: Add APIStatus for calls.
export const initialCardsState: CardsState = {
  cards: [],
  requests: {
    searchForCard: {
      status: 'idle',
    },
  },
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialCardsState,
  reducers: {},
  extraReducers: cardsBuilder,
});
