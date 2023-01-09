import { CardDisplayProps } from '../../types';
import { multifaceLayouts, multisideLayouts } from '../../util';
import { SingleFaceCard } from './displayTypes';
import { MultiFacedCard } from './displayTypes/MultiFacedCard';
import { MultiSidedCard } from './displayTypes/MultiSidedCard';

export const CardDisplay = ({ card }: CardDisplayProps) => {
  const { layout } = card || {};

  const multiside = multisideLayouts.includes(
    layout as typeof multisideLayouts[number],
  );

  const multiface =
    !multiside &&
    multifaceLayouts.includes(layout as typeof multifaceLayouts[number]);

  return card ? (
    multiface ? (
      <MultiFacedCard card={card} />
    ) : multiside ? (
      <MultiSidedCard card={card} />
    ) : (
      <SingleFaceCard card={card} />
    )
  ) : (
    <></>
  );
};
