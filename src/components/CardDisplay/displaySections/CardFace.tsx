import { Divider, styled, Typography } from '@mui/material';
import { FC, Fragment } from 'react';
import { CardFaceDisplayProps } from '../../../types';
import { convertSymbols } from '../../../util';

const SpacedDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(-1),
  marginRight: theme.spacing(-1),
}));

export const CardFace: FC<CardFaceDisplayProps> = ({
  face: {
    name,
    mana_cost,
    type_line,
    oracle_text,
    loyalty,
    power,
    toughness,
    artist,
  },
}) => {
  return (
    <>
      <Typography>
        {name}
        {mana_cost ? [' - ', convertSymbols(mana_cost)] : undefined}
      </Typography>
      <SpacedDivider />
      <Typography>{type_line}</Typography>
      <SpacedDivider />
      {oracle_text?.split('\n').map((line, i) => (
        <Typography key={i}>{convertSymbols(line)}</Typography>
      ))}
      <SpacedDivider />
      {(loyalty !== undefined || power !== undefined) && (
        <Fragment key={loyalty ? 'loyalty' : 'pt'}>
          <Typography>{loyalty ?? `${power}/${toughness}`}</Typography>
          <SpacedDivider />
        </Fragment>
      )}
      <Typography>{artist}</Typography>
    </>
  );
};
