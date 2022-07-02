import React from 'react';

export type SitePages = 'home' | 'results';
export type SiteURLS = '/' | '/search' | '/search/results';
export type SiteMapItem = {
  urls: SiteURLS[];
  Component: React.FC | (() => JSX.Element);
};

export type Sitemap = Record<SitePages, SiteMapItem>;
