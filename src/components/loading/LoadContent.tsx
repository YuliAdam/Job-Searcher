import SearchIcon from '@assets/search-icon';
import styles from './loading.module.scss';
export default function LoadContent() {
  return (
    <div className={styles.loading}>
      <SearchIcon className={styles.loading_img} />
    </div>
  );
}
