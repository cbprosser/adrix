import { APICard } from '../../types';

export const cardToMUIRow = ({
  rarity,
  set,
  prices: { usd, tix, eur, ...restPrices },
  ...other
}: APICard) => ({
  eur: eur ? +eur : undefined,
  rarity: `${rarity[0].toUpperCase()}${rarity.slice(1)}`,
  set: set.toUpperCase(),
  tix: tix ? +tix : undefined,
  usd: usd ? +usd : undefined,
  prices: { usd, tix, eur, ...restPrices },
  ...other,
});

export const muiRowToCard = ({
  eur,
  rarity,
  set,
  tix,
  usd,
  ...other
}: ReturnType<typeof cardToMUIRow>) =>
  ({
    rarity: `${rarity[0].toLowerCase()}${rarity.slice(1)}`,
    set: set.toLowerCase(),
    ...other,
  } as APICard);
