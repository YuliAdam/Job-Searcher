'use client';
import type { GetJobResponse } from '@components/interfaces';
import styles from './card.module.scss';

interface Props {
  response: GetJobResponse;
}

export const CARDS_AT_PAGE = 12;

export default function CardList(props: Props) {
 
  return (
    <section className={styles.list}>
    {props.response.jobs.toString()}
    </section>
  );
}
