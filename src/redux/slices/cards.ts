import { createSlice } from '@reduxjs/toolkit';
import { CardsState } from '../../types';

export const initialCardsState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialCardsState,
  reducers: {},
  extraReducers: {},
});
