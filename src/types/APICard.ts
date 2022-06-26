import { layouts, rarities, relatedComponents } from '../util';

/* eslint-disable camelcase */
export type APICard = APICore & APIGameplay & APIPrint;

export type APICore = {
  arena_id?: number;
  id: APIUUID;
  lang: string; // TODO: literalise
  mtgo_id?: number;
  mtgo_foil_id?: number;
  multiverse_ids?: number[];
  tcgplayer_id?: number;
  cardmarket_id?: number;
  object: 'card';
  oracle_id: APIUUID;
  prints_search_uri: APIURI;
  rulings_uri: APIURI;
  scryfall_uri: APIURI;
  uri: APIURI;
};

export type APIGameplay = {
  all_parts?: APIAllParts[];
  card_faces?: APICardFace[];
  cmc: number;
  color_identity: APIColors[];
  color_indicator?: APIColors[];
  colors?: APIColors[];
  edhrec_rank?: number;
  foil: boolean;
  hand_modifier?: string;
  keywords: string[];
  layout: APILayout;
  legalities: APILegalities;
  life_modifier?: string;
  loyalty?: string;
  mana_cost?: string;
  name: string;
  nonfoil: boolean;
  oracle_text?: string;
  oversized: boolean;
  power?: string;
  produced_mana?: APIColors[];
  reserved: boolean;
  toughness?: string;
  type_line: string;
};

export type APIPrint = {
  artist?: string;
  booster: boolean;
  border_color: string;
  card_back_id: APIUUID;
  collector_number: string;
  content_warning?: boolean;
  digital: boolean;
  flavor_name?: string;
  flavor_text?: string;
  frame_effects?: string[]; // TODO: literalise
  frame: string;
  full_art: boolean;
  games: string[]; // TODO: literalise
  highres_image: boolean;
  illustration_id?: APIUUID;
  image_status: string; // TODO: literalise
  image_uris?: APIImageURIS;
  prices: APIPrices;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  promo: boolean;
  promo_types?: string[];
  purchase_uris: APIPurchaseURIS;
  rarity: APIRarity;
  related_uris: APIRelatedURIS;
  released_at: APIDateString;
  reprint: boolean;
  scryfall_set_uri: APIURI;
  set_name: string;
  set_search_uri: APIURI;
  set_type: string;
  set_uri: APIURI;
  set: string;
  story_spotlight: boolean;
  textless: boolean;
  variation: boolean;
  variation_of?: APIUUID;
  watermark?: string;
  preview?: APIPreview;
};

export type APICardFace = {
  artist?: string;
  color_indicator?: string;
  colors?: APIColors[];
  flavor_text?: APIColors[];
  illustration_id?: APIUUID;
  image_uris?: APIImageURIS;
  loyalty?: string;
  mana_cost: string;
  name: string;
  object: string;
  oracle_text?: string;
  power?: string;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  toughness?: string;
  type_line: string;
  watermark?: string;
};

export type APIAllParts = {
  id: APIUUID;
  object: 'related_card';
  component: APIRelatedComponents;
  name: string;
  type_line: string;
  uri: APIURI;
};

export type APIRelatedURIS = {
  gatherer: APIURI;
  [key: string]: APIURI;
};

export type APIPurchaseURIS = {
  tcgplayer: APIURI;
  cardmarket: APIURI;
  cardhoarder: APIURI;
  [key: string]: APIURI;
};

export type APIPrices = {
  usd?: string;
  usd_foil?: string;
  eur?: string;
  eur_foil?: string;
  tix?: string;
};

export type APIImageURIS = {
  small?: APIURI;
  normal?: APIURI;
  large?: APIURI;
  png?: APIURI;
  art_crop?: APIURI;
  border_crop?: APIURI;
};

export type APIPreview = {
  previewed_at?: APIDateString;
  source_uri?: APIURI;
  source?: string;
};

export type APIColors = 'W' | 'U' | 'B' | 'R' | 'G';

export type APILegalities = {
  [key: string]: 'legal' | 'not legal' | 'restricted' | 'banned';
};

export type APIURI = string;

export type APIUUID = string;

export type APIDateString = string;

export type APILayout = typeof layouts[number];

export type APIRarity = typeof rarities[number];

export type APIRelatedComponents = typeof relatedComponents[number];
