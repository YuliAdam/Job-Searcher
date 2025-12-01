import Logo from '@assets/JOB-SEARCHER';
import styles from './header.module.scss';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <Navigation />
    </header>
  );
}
