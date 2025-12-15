import { baseParams, EXTERNAL_LINKS, MAX_JOB_COUNT } from '@config/apiConfig';

export function getAllJob() {
  console.log(EXTERNAL_LINKS.baseUrl);
  return EXTERNAL_LINKS.baseUrl
    ? fetch(
        EXTERNAL_LINKS.baseUrl.concat(`?${baseParams.count}=${MAX_JOB_COUNT}`)
      )
    : Promise.reject('Base link error');
}
