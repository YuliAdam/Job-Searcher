import styles from './main.module.scss';
import CardListWrapper from '@components/cards/CardListWrapper';

export default async function Main() {
  console.log('main component')
  return (
    <section className={styles.main}>
      <CardListWrapper />
    </section>
  );
}
