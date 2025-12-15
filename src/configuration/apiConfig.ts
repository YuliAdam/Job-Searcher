export const EXTERNAL_LINKS = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  feed: process.env.FEED_URL,
};
export const baseParams = {
  count: 'count',
  tag: 'tag',
  geo: 'geo',
  industry: 'industry',
};
export const feedParams = {
  categories: 'job_categories',
  types: 'job_types',
  keywords: 'search_keywords',
  region: 'search_region',
};
export const MAX_JOB_COUNT = 100;
