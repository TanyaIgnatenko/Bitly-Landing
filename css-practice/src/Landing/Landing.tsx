import React from 'react';

import ProductsSection from './ProductsSection/ProductsSection';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import ShortenLinkSection from "./ShortenLink/ShortenLinkSection";
import StatisticsSection from './StatisticsSection/StatisticsSection';
import FeedbackSection from "./FeedbackSection/FeedbackSection";

import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />
            <HeroSection />
            <ProductsSection />
            <ShortenLinkSection />
            <StatisticsSection />
            <FeedbackSection />
        </div>
    )
};

export default Landing;
