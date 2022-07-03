import * as pages from '../components/Pages';

export type SitePageComponents = keyof typeof pages;
export type SitePages = Lowercase<SitePageComponents>;
export type SiteURLS = '/' | '/search' | '/search/results';
export type SiteMapItem = {
  appBar?: boolean;
  component: SitePageComponents;
  urls: SiteURLS[];
};

export type Sitemap = Record<SitePages, SiteMapItem>;
