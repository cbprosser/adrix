import { TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { searchForCard, useAppDispatch, useAppSelector } from '../../redux';
import { APICard } from '../../types';

interface SimpleCardSearchBarProps {
  hideError?: boolean;
  onChange?: (query: string) => void;
  onNewCards?: (card: APICard) => void; // switch to array once functionality is there
  value?: string;
}

export const SimpleCardSearchBar: React.FC<SimpleCardSearchBarProps> = ({
  hideError,
  onChange,
  onNewCards,
  value,
}) => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const {
    cards,
    requests: {
      searchForCard: { message },
    },
  } = useAppSelector((s) => s.cards);

  const errorMessage = useMemo(
    () => (hideError ? undefined : message),
    [message, hideError],
  );

  useEffect(() => {
    if (cards.length === 1) {
      onNewCards?.(cards[0]);
    }
  }, [cards, onNewCards]);

  useEffect(() => {
    onChange?.(query);
  }, [onChange, query]);

  useEffect(() => {
    value !== undefined && setQuery(value);
  }, [value]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(searchForCard(query));
  };

  return (
    <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
      <TextField
        style={{
          width: `${(1 / 3) * 100}vw`,
          minWidth: 300,
        }}
        value={query}
        label="Enter a card name"
        onChange={(event) => setQuery(event.target.value)}
        error={!!message}
        helperText={errorMessage}
      />
    </form>
  );
};
