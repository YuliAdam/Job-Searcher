'use client';
import type { GetJobResponse } from '@components/interfaces';
import Card from './Card';
import styles from './card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAllJob } from 'store/slices/jobSlice';
import { pageSelector } from 'store/selectors';
import { useEffect } from 'react';

interface Props {
  response: GetJobResponse;
}

export const CARDS_AT_PAGE = 12;

export default function CardList(props: Props) {
  const page = useSelector(pageSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllJob(props.response.jobs));
  });
  return (
    <section className={styles.list}>
      {props.response.jobs.map(
        (i, k) =>
          k >= CARDS_AT_PAGE * (page - 1) &&
          k < CARDS_AT_PAGE * page && <Card job={i} key={i.id} />
      )}
    </section>
  );
}
