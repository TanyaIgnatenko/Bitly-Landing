import React from 'react';
import FocusLock from 'react-focus-lock';
import {useMedia} from 'react-use';
import cn from 'classnames';

import LogoLink from './LogoLink/LogoLink'
  ;
import styles from './Header.module.css';
import {useBinaryState} from '../../utils/useBinaryState';

const Header = () => {
    const isLarge = useMedia('(min-width: 1025px)');
    const [isMenuOpened, toggleIsMenuOpened] = useBinaryState();
    return (
        <header className={styles.header}>
            {isLarge && !isMenuOpened && (
                <div className={styles.container}>
                    <div className={styles.topPart}>
                        <div className={styles.leftPart}>
                            <LogoLink />
                        </div>
                        <div className={styles.rightPart}>
                            <nav className={styles.nav}>
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
                            </nav>
                            <ul className={cn(styles.sideLinks, styles.showForLarge)}>
                                <li>
                                    <a href="" className={styles.loginLink}>Log in</a>
                                </li>
                                <li>
                                    <a href="" className={styles.signupLink}>Sign up Free</a>
                                </li>
                                <li>
                                    <a href="" className={styles.getQuoteLink}>Get a Quote</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             )}
             {(!isLarge && !isMenuOpened) && (
                 <div className={styles.containerForSmall}>
                    <div className={styles.topPart}>
                        <div className={styles.leftPart}>
                            <LogoLink />
                        </div>
                        <div className={styles.rightPart}>
                           <button
                               className={
                                   cn(styles.menuButton, styles.closedMenuButton)
                               }
                               onClick={toggleIsMenuOpened}
                           />
                        </div>
                    </div>
                 </div>
             )}
            {isMenuOpened && (
               <FocusLock>
                  <div className={styles.containerForSmall}>
                    <div className={styles.topPart}>
                      <div className={styles.leftPart}>
                        <LogoLink />
                      </div>
                      <div className={styles.rightPart}>
                        <button
                          className={
                            cn(styles.menuButton, styles.openedMenuButton)
                          }
                          onClick={toggleIsMenuOpened}
                        />
                      </div>
                    </div>
                    <div className={styles.bottomPart}>
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
                </div>
             </FocusLock>
          )}
       </header>
    );
};

export default Header;