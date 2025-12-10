import styles from './pagination.module.scss';
interface Props {
  num: string;
  className?: string;
  onClick?: () => void;
}

export default function Page(props: Props) {
  return (
    <div
      className={`${props.className} ${styles.page}`}
      onClick={props.onClick}
    >
      <p>{props.num}</p>
    </div>
  );
}
