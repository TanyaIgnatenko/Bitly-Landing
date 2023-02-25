import React from 'react';
import LogoLink from './LogoLink/LogoLink';

import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.wrapper}>
        <div className={styles.container}>
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
            <ul className={styles.sideLinks}>
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
        </header>
    )
};

export default Header;