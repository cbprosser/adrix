import { cardThunks } from '../../../redux';
import { APICard } from '../../models';
import { APISlice } from '../common';

export type CardsActions = keyof typeof cardThunks;

export type CardsState = {
  cards: APICard[];
} & APISlice<CardsActions>;
