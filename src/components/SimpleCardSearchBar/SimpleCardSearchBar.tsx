import { InputAdornment, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { searchForCard, useAppDispatch, useAppSelector } from '../../redux';
import { SimpleCardSearchBarProps } from '../../types';
import SearchIcon from '@mui/icons-material/Search';

export const SimpleCardSearchBar: React.FC<SimpleCardSearchBarProps> = ({
  hideError,
  onChange,
  value,
}) => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const { message } = useAppSelector((s) => s.cards.requests.searchForCard);

  const errorMessage = useMemo(
    () => (hideError ? undefined : message),
    [message, hideError],
  );

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
          maxWidth: 500,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        error={!!message}
        helperText={errorMessage}
        fullWidth
      />
    </form>
  );
};
