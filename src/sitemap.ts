import { Home, Results } from './components';
import { Sitemap } from './types/sitemap';

export const sitemap: Sitemap = {
  home: {
    urls: ['/', '/search'],
    Component: Home,
  },
  results: {
    urls: ['/search/results'],
    Component: Results,
  },
};
