import React, { useCallback } from "react";

import ActionLink from '../components/ActionLink/ActionLink';

import styles from './CTASection.module.css';
const CTASection = () => {
  const doNothingOnLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  }, []);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <h3 className={styles.title}>More than a free link shortener</h3>
                <ActionLink href="" onClick={doNothingOnLinkClick} size="l" className={styles.ctaLink}>Get Started</ActionLink>
            </div>
        </div>
    );
};

export default CTASection;