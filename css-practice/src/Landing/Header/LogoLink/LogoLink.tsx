import React from "react";

import styles from './LogoLink.module.css';

const LogoLink = (props: React.HTMLProps<HTMLAnchorElement>) => {
    return (
        <a href="" {...props}>
            <img
                className={styles.logo}
                src="https://docrdsfx76ssb.cloudfront.net/static/1675956644/pages/wp-content/uploads/2021/08/bitly_logo.svg"
                alt="Bitly logo"
                width="100"
                height="50"
            />
        </a>
    );
};

export default LogoLink;