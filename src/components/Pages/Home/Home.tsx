import { Container } from '@mui/material';
import { useState } from 'react';
import { SimpleCardSearchBar } from '../../SimpleCardSearchBar';

export const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      fixed
    >
      <SimpleCardSearchBar
        hideError
        value={query}
        onNewCards={(card) => setQuery(card.name)}
      />
    </Container>
  );
};
