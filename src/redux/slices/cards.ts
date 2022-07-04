import { createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../types';
import { generateRequestsObject } from '../../util';
import { cardsBuilder, cardThunks } from '../thunks';

// TODO: Add APIStatus for calls.
export const initialCardsState: CardsState = {
  cards: [],
  requests: generateRequestsObject<CardsState>(cardThunks),
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialCardsState,
  reducers: {},
  extraReducers: cardsBuilder,
});
