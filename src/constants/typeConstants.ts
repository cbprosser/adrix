export const mtgConstants = {
  colorAbbreviations: ['W', 'U', 'B', 'R', 'G', 'C'] as const,
  colorAbbreviationMap: {
    W: 'White',
    U: 'Blue',
    B: 'Black',
    R: 'Red',
    G: 'Green',
    C: 'Colorless',
  } as const,
  rarityAbbreviations: ['C', 'U', 'R', 'M'] as const,
  rarityAbbreviationMap: {
    C: 'Common',
    U: 'Uncommon',
    R: 'Rarity',
    M: 'Mythic',
  } as const,
};

export const advancedSearch = {
  formFields: [
    'cardName',
    'color',
    'manaCost',
    'rarity',
    'text',
    'type',
  ] as const,
};
