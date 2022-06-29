import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { sitemap } from './sitemap';

export const App = () => {
  const routes = useMemo(
    () =>
      (Object.keys(sitemap) as (keyof typeof sitemap)[]).reduce(
        (accumulator, key) => {
          const { Component, urls } = sitemap[key];
          return [
            ...accumulator,
            ...urls.map((url) => (
              <Route key={`${key}${url}`} path={url} element={<Component />} />
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
