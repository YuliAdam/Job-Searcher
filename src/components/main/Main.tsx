import styles from './main.module.scss';
import Pagination from '@components/pagination/Pagination';
import CardListWrapper from '@components/cards/CardListWrapper';

export default function Main() {
  return (
    <section className={styles.main}>
      <CardListWrapper />
      <Pagination />
    </section>
  );
}
