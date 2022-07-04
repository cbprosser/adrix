import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { loadSearch, useAppDispatch } from '../../../redux';
import { APICard, APIResponse } from '../../../types';
import { notError } from '../../../util';
import { CardDisplay } from '../../CardDisplay';
import { MultipleCardDisplay } from '../../MultipleCardDisplay';

export const Results = () => {
  const { state } = useLocation();
  const [search] = useSearchParams();
  const { q: query } = Object.fromEntries(search) as { q: string };
  const dispatch = useAppDispatch();

  const display = useMemo(() => {
    const response = (state as { response: APIResponse<APICard> } | null)
      ?.response;
    if (response !== undefined) {
      if (notError(response)) {
        const cards = response.data;
        if (cards.length > 1) return <MultipleCardDisplay list={response} />;
        else return <CardDisplay card={cards[0]} />;
      }
      return <>no cards found for search {query}</>;
    }
    dispatch(loadSearch(query));
    return <>loading</>;
  }, [dispatch, query, state]);

  return <Box sx={{ height: '100%' }}>{display}</Box>;
};
