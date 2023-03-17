import classNames from 'classnames';
import { MdOutlineLanguage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'hooks/hooks';

import styles from './menu.module.scss';

interface IMenuProps {
    user?: string;
    logOut?: () => void
}
const Menu: React.FC<IMenuProps> = ({ user, logOut }) => {
    return (
        <nav data-test-id="header-nav" className={styles.header__nav}>
            <ul className={styles['nav-header__list']}>
                <li className={styles['nav-header__item']} title="language">
                    <span><MdOutlineLanguage className={styles.book} /> ua</span>

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
                                    to="login"
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
    )
}

export { Menu }