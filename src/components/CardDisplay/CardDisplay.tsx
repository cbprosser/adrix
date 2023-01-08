import { Box, Divider, Paper, styled, Typography } from '@mui/material';
import { Fragment } from 'react';
import { APICard } from '../../types';
import { convertSymbols } from '../../util';

interface CardDisplayProps {
  card?: APICard;
}

const SpacedDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(-1),
  marginRight: theme.spacing(-1),
}));

export const CardDisplay = ({ card }: CardDisplayProps) => {
  const {
    name,
    image_uris,
    mana_cost,
    type_line,
    oracle_text,
    power,
    toughness,
    loyalty,
    artist,
  } = card || {};

  const { normal } = image_uris ?? {};

  return card !== undefined ? (
    <Paper elevation={0} sx={{ display: 'flex' }}>
      <Box component="img" src={normal} sx={{ maxHeight: 400 }} />
      <Paper sx={(theme) => ({ padding: theme.spacing(1), width: '33.33%' })}>
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
      </Paper>
      <Paper elevation={0} sx={{ flexGrow: 1 }}>
        coming soon
      </Paper>
    </Paper>
  ) : (
    <></>
  );
};
