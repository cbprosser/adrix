import { Paper } from '@mui/material';
import { FC } from 'react';
import { CardDisplayProps } from '../../../types';
import { CardFace, CardImage } from '../displaySections';

export const SingleFaceCard: FC<Required<CardDisplayProps>> = ({ card }) => {
  return (
    <Paper elevation={0} sx={{ display: 'flex' }}>
      <CardImage faces={[card]} />
      <Paper sx={(theme) => ({ padding: theme.spacing(1), width: '33.33%' })}>
        <CardFace face={card} />
      </Paper>
      <Paper elevation={0} sx={{ flexGrow: 1 }}>
        coming soon
      </Paper>
    </Paper>
  );
};
