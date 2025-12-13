export const PATHS = {
  empty: '/',
  about: '/about',
  firstPage: '/1',
  page: getPagePath,
};

function getPagePath(page: number | string) {
  return `${PATHS.empty}${page}`;
}
