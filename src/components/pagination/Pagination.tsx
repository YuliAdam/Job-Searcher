'use client';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import styles from './pagination.module.scss';
import { loadingSelector, pageSelector } from 'store/selectors';
import { MAX_JOB_COUNT } from '@config/apiConfig';
import { CARDS_AT_PAGE } from '@components/cards/CardList';
import { changePage, setPage } from 'store/slices/pageSlice';
import { useEffect, useState } from 'react';
import { setLoading } from 'store/slices/loadingSlice';

const pageSymbols = {
  goToInit: '<<',
  goPrev: '<',
  goToLast: '>>',
  goNext: '>',
};

export default function Pagination() {
  const page = useSelector(pageSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => dispatch(setLoading(false)), 1000);
  }, [page]);
  return loading ? null : (
    <section className={styles.pagination}>
      <Page
        className={page === 1 ? styles.inactive : styles.active}
        num={pageSymbols.goToInit}
        onClick={() => page > 1 && dispatch(setPage(1))}
      />
      <Page
        className={page === 1 ? styles.inactive : styles.active}
        num={pageSymbols.goPrev}
        onClick={() => page > 1 && dispatch(changePage(-1))}
      />
      <Page num={page.toString()} />
      <Page
        className={page < calcLastPageNum() ? styles.active : styles.inactive}
        num={pageSymbols.goNext}
        onClick={() => page < calcLastPageNum() && dispatch(changePage(+1))}
      />
      <Page
        className={page < calcLastPageNum() ? styles.active : styles.inactive}
        num={pageSymbols.goToLast}
        onClick={() =>
          page < calcLastPageNum() && dispatch(setPage(calcLastPageNum()))
        }
      />
    </section>
  );
}

function calcLastPageNum() {
  return Math.trunc(MAX_JOB_COUNT / CARDS_AT_PAGE) + 1;
}
