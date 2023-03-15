import styles from './loader.module.scss';
import { TSpinner } from './types';

const Spinner = ({ isOverflow }: TSpinner) =>
  isOverflow ? (
    <div className={styles.container}>
      <div className={styles.loader}>Loading...</div>
    </div>
  ) : (
    <div className={styles.loader}>Loading...</div>
  );

export default Spinner;
