import { localStorageKeys } from 'configuration/localStorageConfig';

export function getSearchValueFromLocalStorage() {
  return localStorage.getItem(localStorageKeys.search) || '';
}

export function setSearchValueInLocalStorage(value: string) {
  return localStorage.setItem(localStorageKeys.search, value.trim());
}
