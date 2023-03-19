import React, {useCallback} from 'react';
import FocusLock from 'react-focus-lock';
import {useMedia} from 'react-use';
import cn from 'classnames';

import {useBinaryState} from '../../utils/useBinaryState';
import LogoLink from './LogoLink/LogoLink'
import ActionLink from '../components/ActionLink/ActionLink';

import styles from './Header.module.css';

const Header = () => {
    const isLarge = useMedia('(min-width: 1025px)');
    const [isMenuOpened, toggleIsMenuOpened] = useBinaryState();
    const doNothingOnLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    }, []);

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
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                        Why Bitly?
                                    </a>
                                </li>
                                <li className={styles.linkBox}>
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                        Products
                                    </a>
                                </li>
                                <li className={styles.linkBox}>
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                        Pricing
                                    </a>
                                </li>
                                <li className={styles.linkBox}>
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                        Resources
                                    </a>
                                </li>
                            </nav>
                            <ul className={cn(styles.sideLinks, styles.showForLarge)}>
                                <li>
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.loginLink}>Log in</a>
                                </li>
                                <li>
                                    <a href="" onClick={doNothingOnLinkClick} className={styles.signupLink}>Sign up Free</a>
                                </li>
                                <li>
                                    <ActionLink href="" onClick={doNothingOnLinkClick} size="m" className={styles.getQuoteLink}>Get a Quote</ActionLink>
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
                               aria-label="Open menu"
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
                          aria-label="Close menu"
                        />
                      </div>
                    </div>
                    <div className={styles.bottomPart}>
                        <ul className={styles.nav}>
                            <li className={styles.linkBox}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                    Why Bitly?
                                </a>
                            </li>
                            <li className={styles.linkBox}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                    Products
                                </a>
                            </li>
                            <li className={styles.linkBox}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                    Pricing
                                </a>
                            </li>
                            <li className={styles.linkBox}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.link}>
                                    Resources
                                </a>
                            </li>
                        </ul>
                        <ul className={cn(styles.sideLinks)}>
                            <li className={styles.sideLinkItem}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.loginLink}>Log in</a>
                            </li>
                            <li className={styles.sideLinkItem}>
                                <a href="" onClick={doNothingOnLinkClick} className={styles.signupLink}>Sign up Free</a>
                            </li>
                            <li className={styles.sideLinkItem}>
                              <ActionLink href="" onClick={doNothingOnLinkClick} size="m" className={styles.getQuoteLink}>Get a Quote</ActionLink>
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