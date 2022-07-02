export const relatedComponents = [
  'combo_piece',
  'meld_part',
  'meld_result',
  'token',
] as const;

export const rarities = [
  'bonus',
  'common',
  'mythic',
  'rare',
  'special',
  'uncommon',
] as const;

export const imageVersions = [
  'small',
  'normal',
  'large',
  'png',
  'art_crop',
  'border_crop',
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

export const colorAbbrvs = ['W', 'U', 'B', 'R', 'G'] as const;

export const legalities = [
  'banned',
  'legal',
  'not_legal',
  'restricted',
] as const;

export const finishes = ['etched', 'glossy', 'nonfoil', 'foil'] as const;

export const securityStamps = ['oval', 'triangle', 'acorn', 'arena'] as const;
