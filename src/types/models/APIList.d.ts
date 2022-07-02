import { APIURI } from './APICard';

export type APIList<T = unknown> = {
  object: 'list';
  data: T[];
  has_more: boolean;
  next_page?: APIURI;
  total_cards?: number;
  warnings?: string[];
};
