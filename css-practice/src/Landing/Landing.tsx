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
            <hr className={styles.sectionDivider} />
            <ProductsSection />
            <ShortenLinkSection />
            <StatisticsSection />
            <hr className={styles.sectionDivider} />
            <FeedbackSection />
            <hr className={styles.sectionDivider} />
            <OurClientsSection />
            <hr className={styles.sectionDivider} />
            <FAQSection />
            <CTASection />
            <FooterSection />
        </div>
    )
};

export default Landing;
