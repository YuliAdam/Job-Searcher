import styles from './main.module.scss';
import Pagination from '@components/pagination/Pagination';

export default async function Main() {
  return (
    <section className={styles.main}>
      <Pagination />
    </section>
  );
}
