import { BsFillBookFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import classNames from 'classnames';

import { NavLink } from 'hooks/hooks';

import { IHeaderProps } from './types';

import computer from 'assets/header/computer-screen-with-windows-logo-svgrepo-com.svg';
import styles from './header.module.scss';


const Header: React.FC<IHeaderProps> = ({ user, logOut }) => {


  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <NavLink
          data-test-id="header-logo"
          to='/'
          className={styles.header__logo}
        >
          <img src={computer} alt="computer" width={40} height={40} />
          Best Courses
        </NavLink>
        <nav data-test-id="header-nav" className={styles.header__nav}>
          <ul className={styles['nav-header__list']}>
            <li className="nav-header__item" title="Bookings">
              <NavLink
                data-test-id="header-bookings-link"
                to='/courses'
                className={styles['nav-header__inner']}
              >
                <span className="visually-hidden">Courses</span>
                <BsFillBookFill className={styles.book} />
              </NavLink>
            </li>
            <li className={styles['nav-header__item']} title="Profile">
              <div
                data-test-id="header-profile-nav"
                className={classNames(
                  styles['nav-header__inner'],
                  styles['profile-nav']
                )}
                tabIndex={0}
              >
                <span className="visually-hidden">Profile</span>
                <CgProfile className={styles.profile} />
                <ul
                  data-test-id="header-profile-nav-list"
                  className={styles['profile-nav__list']}
                >
                  <li
                    data-test-id="header-profile-nav-username"
                    className={classNames(
                      styles['profile-nav__item'],
                      styles['profile-nav__username']
                    )}
                  >
                    {user || 'not present'}
                  </li>
                  <li className={styles['profile-nav__item']}>
                    <NavLink
                      data-test-id="header-profile-nav-sign-out"
                      to='login'
                      onClick={logOut}
                      className={classNames(
                        styles['profile-nav__sign-out'],
                        styles.button
                      )}
                    >
                      Sign Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
