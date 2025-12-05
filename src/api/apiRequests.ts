import { EXTERNAL_LINKS } from '@config/apiConfig';

export function getAllJob() {
  return fetch(EXTERNAL_LINKS.baseUrl?.concat('?count=21') || 'error');
}
