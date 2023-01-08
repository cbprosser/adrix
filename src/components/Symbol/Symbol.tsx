import { capitalize, styled } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { symbologyMap } from '../../constants/scryfallConstants';
import { APISymbol, SymbolProps } from '../../types';

const StyledAbbr = styled('abbr')<{ symbol: APISymbol }>(
  ({ theme, symbol: { svg_uri, symbol } }) => {
    const abnormalStyles: {
      [k: string]: CSSProperties;
    } = {
      '{100}': {
        textIndent: '1.9rem',
        width: '1.9rem',
      },
      '{1000000}': {
        textIndent: '5rem',
        width: '5rem',
      },
      '{CHAOS}': {
        borderRadius: 0,
        boxShadow: 'none',
        textIndent: '1.2rem',
        width: '1.2rem',
      },
      '{E}': {
        borderRadius: 0,
        boxShadow: 'none',
      },
      '{HR}': {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        textIndent: '.5rem',
        width: '.5rem',
      },
      '{HW}': {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        textIndent: '.5rem',
        width: '.5rem',
      },
      '{P}': {
        borderRadius: 0,
        boxShadow: 'none',
      },
      '{PW}': {
        borderRadius: 0,
        boxShadow: 'none',
        textIndent: '.5rem',
        width: '.5rem',
      },
    };

    return {
      backgroundImage: `url("${svg_uri}")`,
      backgroundPosition: 'top left',
      backgroundSize: '100% 100%',
      borderRadius: 500,
      boxShadow: '-1px 1px 0 rgba(0,.0,0,0.85)',
      colorAdjust: 'exact',
      display: 'inline-block',
      height: theme.typography.body1.fontSize,
      margin: '1px 1px -1px 1px',
      overflow: 'hidden',
      textIndent: theme.typography.body1.fontSize,
      width: theme.typography.body1.fontSize,
      ...abnormalStyles[symbol],
    };
  },
);

export const Symbol: FC<SymbolProps> = ({ symbolString }) => {
  const symbol = symbologyMap[symbolString];

  return (
    <StyledAbbr symbol={symbol} title={capitalize(symbol.english)}>
      {symbol.symbol}
    </StyledAbbr>
  );
};
