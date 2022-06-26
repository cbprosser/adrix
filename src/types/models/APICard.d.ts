import {
  colorAbbrvs,
  finishes,
  layouts,
  legalities,
  rarities,
  relatedComponents,
} from '../../util';

/* eslint-disable camelcase */
export type APICard = APICore & APIGameplay & APIPrint;

export type APICore = {
  arena_id?: number;
  cardmarket_id?: number;
  id: APIUUID;
  lang: string; // TODO: literalise
  mtgo_foil_id?: number;
  mtgo_id?: number;
  multiverse_ids?: number[];
  object: 'card';
  oracle_id: APIUUID;
  prints_search_uri: APIURI;
  rulings_uri: APIURI;
  scryfall_uri: APIURI;
  tcgplayer_id?: number;
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
  artist_ids: string[];
  booster: boolean;
  border_color: string;
  card_back_id: APIUUID;
  collector_number: string;
  content_warning?: boolean;
  digital: boolean;
  finishes: APIFinishes[];
  flavor_name?: string;
  flavor_text?: string;
  frame: string;
  frame_effects?: string[]; // TODO: literalise
  full_art: boolean;
  games: string[]; // TODO: literalise
  highres_image: boolean;
  illustration_id?: APIUUID;
  image_status: string; // TODO: literalise
  image_uris?: APIImageURIS;
  preview?: APIPreview;
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
  set: string;
  set_id: string;
  set_name: string;
  set_search_uri: APIURI;
  set_type: string;
  set_uri: APIURI;
  story_spotlight: boolean;
  textless: boolean;
  variation: boolean;
  variation_of?: APIUUID;
  watermark?: string;
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
  component: APIRelatedComponents;
  id: APIUUID;
  name: string;
  object: 'related_card';
  type_line: string;
  uri: APIURI;
};

export type APIRelatedURIS = {
  gatherer: APIURI;
  [key: string]: APIURI;
};

export type APIPurchaseURIS = {
  cardhoarder: APIURI;
  cardmarket: APIURI;
  tcgplayer: APIURI;
  [key: string]: APIURI;
};

export type APIPrices = {
  eur?: string;
  eur_foil?: string;
  tix?: string;
  usd?: string;
  usd_etched?: string;
  usd_foil?: string;
};

export type APIImageURIS = {
  art_crop?: APIURI;
  border_crop?: APIURI;
  large?: APIURI;
  normal?: APIURI;
  png?: APIURI;
  small?: APIURI;
};

export type APIPreview = {
  previewed_at?: APIDateString;
  source?: string;
  source_uri?: APIURI;
};

export type APIColors = typeof colorAbbrvs[number];

export type APILegalities = {
  [key: string]: typeof legalities[number];
};

export type APIFinishes = typeof finishes[number];

export type APIURI = string;

export type APIUUID = string;

export type APIDateString = string;

export type APILayout = typeof layouts[number];

export type APIRarity = typeof rarities[number];

export type APIRelatedComponents = typeof relatedComponents[number];
