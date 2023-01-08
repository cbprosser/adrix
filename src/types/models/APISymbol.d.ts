import { APIColors } from './APICard';

export type APISymbol = {
  english: string;
  symbol: string;
  svg_uri: string;
  appears_in_mana_costs?: boolean;
  cmc?: number;
  colors?: APIColors[];
  funny?: boolean;
  gatherer_alternates?: string[];
  loose_variant?: string;
  represents_mana?: boolean;
  transposable?: boolean;
};
