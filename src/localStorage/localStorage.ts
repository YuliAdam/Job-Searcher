import { localStorageKeys } from 'configuration/localStorageConfig';

export function getSearchFromLocalStorage() {
  return localStorage.getItem(localStorageKeys.search) || '';
}

export function setSearchInLocalStorage(value: string) {
  localStorage.setItem(localStorageKeys.search, value.trim());
}

export function getPageFromLocalStorage() {
  return parseInt(localStorage.getItem(localStorageKeys.page) || '1');
}
export function setPageToLocalStorage(page: string | number) {
  localStorage.setItem(localStorageKeys.page, page.toString());
}
