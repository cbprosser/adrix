export type SitePages = 'home' | 'results';
export type SiteURLS = '/' | '/search' | '/search/results';
export type SiteMapItem = {
  urls: SiteURLS[];
  Component: () => JSX.Element;
};

export type Sitemap = Record<SitePages, SiteMapItem>;
