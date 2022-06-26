import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './slices/cards';

export const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
});
