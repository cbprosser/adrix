import { Sitemap } from './types';

export const sitemap: Sitemap = {
  home: {
    urls: ['/', '/search'],
    component: 'Home',
  },
  results: {
    appBar: true,
    urls: ['/search/results'],
    component: 'Results',
  },
  advancedSearch: {
    appBar: true,
    urls: ['/search/advanced'],
    component: 'AdvancedSearch',
  },
};
