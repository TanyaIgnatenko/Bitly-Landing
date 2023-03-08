import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';

import styles from './Landing.module.css';

const Landing = () => {

    return (
        <div className={styles.container}>
            <Header />
            <HeroSection />
        </div>
    )
};

export default Landing;
