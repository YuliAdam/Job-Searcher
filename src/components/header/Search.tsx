'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './header.module.scss';
import type { RootState } from 'store/store';
import { setSearchFromLocalStorage } from 'store/slices/searchSlice';
import SearchIcon from '@assets/search-icon';

export default function Search() {
  const search = useDispatch();
  useEffect(() => {
    search(setSearchFromLocalStorage());
  }, []);
  const initValue = useSelector((state: RootState) => state.search.value);
  const [value, setValue] = useState(initValue);

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target && e.target instanceof HTMLInputElement) {
      const text = e.target.value;
      setValue(text);
    }
  }

  return (
    <div className={styles.search.concat(value && ` ${styles.active}`)}>
      <input
        className={styles.search_input}
        placeholder="Search..."
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(e)}
      />
      <SearchIcon className={styles.search_icon} />
    </div>
  );
}
