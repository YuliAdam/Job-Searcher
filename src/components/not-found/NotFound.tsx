import styles from './not-found.module.scss';
export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <div>
        <span>404</span>
      </div>
      <h1>Page Not Found</h1>
    </div>
  );
}
