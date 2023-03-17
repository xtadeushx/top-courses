import { NavLink } from 'hooks/hooks';

import { IHeaderProps } from './types';

import computer from 'assets/header/computer-screen-with-windows-logo-svgrepo-com.svg';
import { Menu } from '../menu/menu';

import styles from './header.module.scss';

const Header: React.FC<IHeaderProps> = ({ user, logOut }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <NavLink
          data-test-id="header-logo"
          to="/"
          className={styles.header__logo}
        >
          <img src={computer} alt="computer" width={40} height={40} />
          Best Courses
        </NavLink>
        <Menu user={user} logOut={logOut} />
      </div>
    </header>
  );
};

export { Header };
