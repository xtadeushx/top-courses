import styles from './loader.module.scss';

type TSpinner = {
  isOverflowRootContainer: boolean;
};

const Spinner = ({ isOverflowRootContainer }: TSpinner) =>
  isOverflowRootContainer ? (
    <div className={styles.container}>
      <div className={styles.loader}>Loading...</div>
    </div>
  ) : (
    <div className={styles.loader}>Loading...</div>
  );

export default Spinner;
