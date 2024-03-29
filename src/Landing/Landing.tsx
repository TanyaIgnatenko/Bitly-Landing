import React from 'react';

import ProductsSection from './ProductsSection/ProductsSection';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import ShortenLinkSection from "./ShortenLink/ShortenLinkSection";
import StatisticsSection from './StatisticsSection/StatisticsSection';
import FeedbackSection from "./FeedbackSection/FeedbackSection";
import OurClientsSection from "./OurClientsSection/OurClientsSection";
import FAQSection from "./FAQSection/FAQSection";
import CTASection from './CTASection/CTASection';

import styles from './Landing.module.css';
import FooterSection from './FooterSection/FooterSection';

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />
            <HeroSection />
            <div className={styles.sectionDividerWrapper}>
                <hr  />
            </div>
            <ProductsSection />
            <ShortenLinkSection />
            <StatisticsSection />
            <div className={styles.sectionDividerWrapper}>
                <hr  />
            </div>
            <FeedbackSection />
            <div className={styles.sectionDividerWrapper}>
                <hr  />
            </div>
            <OurClientsSection />
            <div className={styles.sectionDividerWrapper}>
                <hr  />
            </div>
            <FAQSection />
            <CTASection />
            <FooterSection />
        </div>
    )
};

export default Landing;
