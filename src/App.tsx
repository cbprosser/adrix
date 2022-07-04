import { Box, Container } from '@mui/material';
import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './components';
import { sitemap } from './sitemap';
import * as pages from './components/Pages';

export const App = () => {
  const routes = useMemo(
    () =>
      (Object.keys(sitemap) as (keyof typeof sitemap)[]).reduce(
        (accumulator, key) => {
          const { component, urls, appBar } = sitemap[key];
          const Component = pages[component];
          return [
            ...accumulator,
            ...urls.map((url) => (
              <Route
                key={`${key}${url}`}
                path={url}
                element={
                  <Box
                    sx={{
                      minHeight: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {appBar && <AppHeader />}
                    <Container
                      sx={{
                        flexGrow: 1,
                        height: 0,
                      }}
                      fixed
                    >
                      <Component />
                    </Container>
                  </Box>
                }
              />
            )),
          ];
        },
        [] as JSX.Element[],
      ),
    [],
  );
  return (
    <div className="App">
      <Routes>{routes}</Routes>
    </div>
  );
};
