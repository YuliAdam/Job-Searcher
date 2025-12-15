'use client';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import styles from './pagination.module.scss';
import { pageSelector } from 'store/selectors';
import { MAX_JOB_COUNT } from '@config/apiConfig';
import { CARDS_AT_PAGE } from '@components/cards/CardList';
import { setPage } from 'store/slices/pageSlice';
import { useEffect } from 'react';
import { redirect, useParams } from 'next/navigation';

const pageSymbols = {
  goToInit: '<<',
  goPrev: '<',
  goToLast: '>>',
  goNext: '>',
};

export default function Pagination() {
  const router = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    router.page &&
      !Array.isArray(router.page) &&
      dispatch(setPage(parseInt(router.page)));
  },[]);
  const page = useSelector(pageSelector);

  const goToFirstPage = () => {
    page > 1 && redirect('1');
  };

  const goToPrevPage = () => {
    page > 1 && redirect((page - 1).toString());
  };

  const goToNextPage = () => {
    page < calcLastPageNum() && redirect((page + 1).toString());
  };

  const goToLastPage = () => {
    page < calcLastPageNum() && redirect(calcLastPageNum().toString());
  };

  return (
    <section className={styles.pagination}>
      <Page
        className={page === 1 ? styles.inactive : styles.active}
        num={pageSymbols.goToInit}
        onClick={goToFirstPage}
      />
      <Page
        className={page === 1 ? styles.inactive : styles.active}
        num={pageSymbols.goPrev}
        onClick={goToPrevPage}
      />
      <Page num={page.toString()} />
      <Page
        className={page < calcLastPageNum() ? styles.active : styles.inactive}
        num={pageSymbols.goNext}
        onClick={goToNextPage}
      />
      <Page
        className={page < calcLastPageNum() ? styles.active : styles.inactive}
        num={pageSymbols.goToLast}
        onClick={goToLastPage}
      />
    </section>
  );
}

function calcLastPageNum() {
  return Math.trunc(MAX_JOB_COUNT / CARDS_AT_PAGE) + 1;
}
