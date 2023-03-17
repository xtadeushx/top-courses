import { AiFillGithub } from 'react-icons/ai';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>
        @copyriting
        <a
          className={styles.footer__link}
          target="_blank"
          href="https://github.com/xtadeushx?tab=repositories"
        >
          Best IT courses
        </a>
        <AiFillGithub className={styles.gitHub} />
      </span>
    </footer>
  );
};

export { Footer };
