import styles from './main.module.scss';
import Pagination from '@components/pagination/Pagination';
import CardListWrapper from '@components/cards/CardListWrapper';

export default async function Main() {
  return (
    <main className={styles.main}>
      <CardListWrapper />
      <Pagination />
    </main>
  );
}
