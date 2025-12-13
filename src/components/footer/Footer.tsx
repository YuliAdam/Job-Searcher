import GitHubLogo from '@assets/img/github-logo';
import styles from './footer.module.scss';
import { GIT_HUB_INFO } from '@assets/gitHubInfo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <a href={GIT_HUB_INFO.href} target="_blank">
          <GitHubLogo className={styles.info_logo} />
        </a>
        <a
          className={styles.info_link}
          href={GIT_HUB_INFO.href}
          target="_blank"
        >
          {GIT_HUB_INFO.text}
        </a>
        <span className={styles.info}>{GIT_HUB_INFO.year}</span>
      </div>
    </footer>
  );
}
