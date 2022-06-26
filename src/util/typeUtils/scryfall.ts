export const relatedComponents = [
  'combo_piece',
  'meld_part',
  'meld_result',
  'token',
] as const;

export const rarities = [
  'common',
  'uncommon',
  'rare',
  'special',
  'mythic',
  'bonus',
] as const;

export const multisideLayouts = [
  'double_faced_token',
  'double_sided',
  'modal_dfc',
  'transform',
] as const;

export const multifaceLayouts = [
  'adventure',
  'flip',
  'split',
  ...multisideLayouts,
] as const;

export const layouts = [
  'art_series',
  'augment',
  'emblem',
  'host',
  'leveler',
  'meld',
  'normal',
  'planar',
  'saga',
  'scheme',
  'token',
  'vanguard',
  ...multifaceLayouts,
] as const;
