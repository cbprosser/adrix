import LoopIcon from '@mui/icons-material/Loop';
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { CardImageDisplayProps, CardImageDisplayState } from '../../../types';
import { multisideLayouts } from '../../../util';
import { StyledIconButton } from '../../StyledIconButton';

const initialState: CardImageDisplayState = {
  face: 0,
};

export const CardImage: FC<CardImageDisplayProps> = ({ faces, layout }) => {
  const [{ face }, setState] = useState(initialState);
  const multiside =
    multisideLayouts.includes(layout as typeof multisideLayouts[number]) ||
    layout === 'flip';

  const handleClick = () => {
    setState((s) => ({ face: Math.abs(s.face - 1) as 0 | 1 }));
  };

  return (
    <Box sx={{ position: 'relative', maxHeight: 400 }}>
      <Box
        component="img"
        src={faces[face].image_uris?.normal}
        sx={(theme) => ({
          maxHeight: 400,
          rotate: layout === 'flip' && face ? '180deg' : 'none',
          transition: theme.transitions.create(['rotate'], {
            duration: theme.transitions.duration.standard,
          }),
        })}
      />
      {multiside ? (
        <StyledIconButton
          variant="contained"
          color="primary"
          sx={{
            position: 'absolute',
            zIndex: 1,
            bottom: -20,
            left: `calc(50% - 20px)`,
          }}
          onClick={handleClick}
        >
          <LoopIcon />
        </StyledIconButton>
      ) : (
        ''
      )}
    </Box>
  );
};
