import { Divider, Paper, styled } from '@mui/material';
import { FC, Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import { CardDisplayProps } from '../../../types';
import { CardFace, CardImage } from '../displaySections';

const SpacedDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(-1),
  marginRight: theme.spacing(-1),
  borderBottomWidth: 'medium',
}));

export const MultiSidedCard: FC<Required<CardDisplayProps>> = ({ card }) => {
  const { card_faces, layout } = card;

  const faces = card_faces as Exclude<typeof card_faces, undefined>;

  return (
    <Paper elevation={0} sx={{ display: 'flex' }}>
      <CardImage layout={layout} faces={faces} />
      <Paper sx={(theme) => ({ padding: theme.spacing(1), width: '33.33%' })}>
        {card_faces?.map((face, i) => (
          <Fragment key={uuid()}>
            <CardFace face={face} />
            {i < card_faces.length - 1 ? <SpacedDivider /> : undefined}
          </Fragment>
        ))}
      </Paper>
      <Paper elevation={0} sx={{ flexGrow: 1 }}>
        coming soon
      </Paper>
    </Paper>
  );
};
