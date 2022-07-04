import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { SimpleCardSearchBar } from '../SimpleCardSearchBar';

export const AppHeader = () => {
  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Adrix
          </Typography>
          <SimpleCardSearchBar hideError />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
