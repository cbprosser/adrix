import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from '.';

export const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
});
