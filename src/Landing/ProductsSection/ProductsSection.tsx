import React, { useCallback } from "react";
import cn from 'classnames';

import ActionLink from "../components/ActionLink/ActionLink";

import styles from './ProductsSection.module.css';

const ProductsSection = () => {
    const doNothingOnLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    }, []);
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <div className={styles.titleBoxWrapper}>
                    <div className={styles.titleBox}>
                        <h3 className={styles.title}>Bitly’s Connections Platform</h3>
                        <h4 className={styles.description}>
                            All the products you need to build brand connections, manage links and QR Codes, and connect with audiences everywhere, in a single unified platform.
                        </h4>
                    </div>
                </div>
                <div className={styles.productsBlock}>
                    <div className={styles.productCard}>
                        <div className={cn(styles.productTitle, styles.linkProductTitle)}>Link Management</div>
                        <div className={styles.productDescription}>
                            A comprehensive solution to help make every point of connection between your content and your audience more powerful.
                        </div>
                        <hr />
                        <p className={styles.featuresTitle}>Popular Link Management Features</p>
                        <ul className={styles.featuresBlock}>
                            <li className={styles.feature}>URL shortening at scale</li>
                            <li className={styles.feature}>Custom links with your brand</li>
                            <li className={styles.feature}>URL redirects</li>
                            <li className={styles.feature}>Advanced analytics & tracking</li>
                        </ul>
                        <ActionLink href="" onClick={doNothingOnLinkClick} size="s" className={styles.getStartedForFreeLink}>Get Started for Free</ActionLink>
                        <a href="" onClick={doNothingOnLinkClick} className={styles.learnMoreLink}>Learn More</a>
                    </div>

                    <div className={styles.productCard}>
                        <div className={cn(styles.productTitle, styles.qrProductTitle)}>QR Codes</div>
                        <div className={styles.productDescription}>
                            QR Code solutions for every customer, business and brand experience.
                        </div>
                        <hr />
                        <p className={styles.featuresTitle}>Popular QR Code Features</p>
                        <ul className={styles.featuresBlock}>
                            <li className={styles.feature}>Fully customizable QR Codes</li>
                            <li className={styles.feature}>Dynamic QR Codes</li>
                            <li className={styles.feature}>QR Code types & destination options</li>
                            <li className={styles.feature}>Advanced analytics & tracking</li>
                        </ul>
                        <ActionLink href="" onClick={doNothingOnLinkClick} size="s" className={styles.getStartedForFreeLink}>Get Started for Free</ActionLink>
                        <a href="" onClick={doNothingOnLinkClick} className={styles.learnMoreLink}>Learn More</a>
                    </div>

                    <div className={styles.productCard}>
                        <div className={cn(styles.productTitle, styles.linkInBioProductTitle)}>
                            Link-in-bio <span className={styles.newBadge}>NEW</span>
                        </div>
                        <div className={styles.productDescription}>
                            Bitly Link-in-bio, powered by Bitly Link Management, to help you curate, package and track your best links.
                        </div>
                        <hr />
                        <p className={styles.featuresTitle}>Popular Link-in-bio Features</p>
                        <ul className={styles.featuresBlock}>
                            <li className={styles.feature}>Custom URLs for social media</li>
                            <li className={styles.feature}>Customizable landing page</li>
                            <li className={styles.feature}>Easy-to-manage links</li>
                            <li className={styles.feature}>Link and landing page tracking</li>
                        </ul>
                        <ActionLink href="" onClick={doNothingOnLinkClick} size="s" className={styles.getStartedForFreeLink}>Get Started for Free</ActionLink>
                        <a href="" onClick={doNothingOnLinkClick} className={styles.learnMoreLink}>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;