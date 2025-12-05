import styles from './error.module.scss';
export default function ErrorContent(props: { reset: () => void }) {
  return (
    <div className={styles.error}>
      <h2>Something went wrong!</h2>
      <button onClick={() => props.reset()}>Try again</button>
    </div>
  );
}
