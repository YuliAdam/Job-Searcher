import GitHubLogo from '@assets/github-logo';
import styles from './footer.module.scss';

const PERSONAL_INFO = {
  githubLink: 'https://github.com/YuliAdam/Job-Searcher/tree/base-structure',
  githubName: 'YuliAdam',
  year: '/2025',
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <a href={PERSONAL_INFO.githubLink} target="_blank">
          <GitHubLogo className={styles.info_logo} />
        </a>
        <a
          className={styles.info_link}
          href={PERSONAL_INFO.githubLink}
          target="_blank"
        >
          {PERSONAL_INFO.githubName}
        </a>
        <span className={styles.info}>{PERSONAL_INFO.year}</span>
      </div>
    </footer>
  );
}
