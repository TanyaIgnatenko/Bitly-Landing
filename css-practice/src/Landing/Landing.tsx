import React from 'react';
import ProductsSection from './ProductsSection/ProductsSection';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';

import styles from './Landing.module.css';

const Landing = () => {

    return (
        <div className={styles.container}>
            <Header />
            <HeroSection />
            <ProductsSection />
        </div>
    )
};

export default Landing;
