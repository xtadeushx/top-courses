import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import heart from '../../../assets/images/heart.svg';
import styles from './footer.module.scss';

const Footer: FC = () => {
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

export default Footer;
