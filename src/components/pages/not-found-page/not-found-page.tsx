import styles from './not-found-page.module.scss';
const NotFoundPage = () => {
  return (
    <>
      <div className={styles.root}>
        <h2 className={styles.title}>
          <span className={styles.span}>😕</span>
          <br />
          This page does not found
        </h2>
        <p className={styles.description}>
          it is pity but this page dos not exist in our site
        </p>
      </div>
    </>
  );
};

export { NotFoundPage };
