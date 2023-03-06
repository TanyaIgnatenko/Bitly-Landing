import React from 'react';
import LogoLink from './LogoLink/LogoLink';
import cn from 'classnames';

import styles from './Header.module.css';
import {useBinaryState} from '../../utils/useBinaryState';

const Header = () => {
    const [isMenuOpened, toggleIsMenuOpened] = useBinaryState();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.topPart}>
                    <div className={styles.leftPart}>
                        <LogoLink />
                    </div>
                    {/*<div className={styles.rightPart}>*/}
                        {/*<nav className={styles.nav}>*/}
                        {/*    <li className={styles.linkBox}>*/}
                        {/*        <a href="" className={styles.link}>*/}
                        {/*            Why Bitly?*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className={styles.linkBox}>*/}
                        {/*        <a href="" className={styles.link}>*/}
                        {/*            Products*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className={styles.linkBox}>*/}
                        {/*        <a href="" className={styles.link}>*/}
                        {/*            Pricing*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className={styles.linkBox}>*/}
                        {/*        <a href="" className={styles.link}>*/}
                        {/*            Resources*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</nav>*/}
                        {/*<ul className={cn(styles.sideLinks, styles.showForLarge)}>*/}
                        {/*    <li>*/}
                        {/*        <a href="" className={styles.loginLink}>Log in</a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a href="" className={styles.signupLink}>Sign up Free</a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a href="" className={styles.getQuoteLink}>Get a Quote</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                   <div className={cn(styles.showForSmall, styles.rightPart)}>
                       <button
                           className={
                               cn(styles.menuButton, isMenuOpened
                                   ? styles.openedMenuButton
                                   : styles.closedMenuButton)
                           }
                           onClick={toggleIsMenuOpened}
                       />
                   </div>

                </div>
                {isMenuOpened && (<div className={styles.bottomPart}>
                    <ul className={styles.nav}>
                        <li className={styles.linkBox}>
                            <a href="" className={styles.link}>
                                Why Bitly?
                            </a>
                        </li>
                        <li className={styles.linkBox}>
                            <a href="" className={styles.link}>
                                Products
                            </a>
                        </li>
                        <li className={styles.linkBox}>
                            <a href="" className={styles.link}>
                                Pricing
                            </a>
                        </li>
                        <li className={styles.linkBox}>
                            <a href="" className={styles.link}>
                                Resources
                            </a>
                        </li>
                    </ul>
                    <ul className={cn(styles.sideLinks)}>
                        <li className={styles.sideLinkItem}>
                            <a href="" className={styles.loginLink}>Log in</a>
                        </li>
                        <li className={styles.sideLinkItem}>
                            <a href="" className={styles.signupLink}>Sign up Free</a>
                        </li>
                        <li className={styles.sideLinkItem}>
                            <a href="" className={styles.getQuoteLink}>Get a Quote</a>
                        </li>
                    </ul>
                </div>
               )}
            </div>
        </header>
    );
};

export default Header;