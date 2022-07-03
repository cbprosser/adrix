import { Container } from '@mui/material';
import { SimpleCardSearchBar } from '../../SimpleCardSearchBar';

export const Home: React.FC = () => {
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
      <SimpleCardSearchBar hideError />
    </Container>
  );
};
