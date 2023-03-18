import {useMedia} from 'react-use';

import styles from './HeroSection.module.css';
const HeroSection = () => {
    const isMobileScreen = useMedia('(width < 640px)');
    return (
        <div className={styles.container}>
            <img
                className={styles.mobileHeroImage}
                src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/08/home-hero-mobile-v2.png"
                alt=""
                width="761"
                height="655"
            />
            <div className={styles.heroContainer}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            We’ve expanded!
                            <br/>
                            Shorten URLs. Generate{isMobileScreen ? <br/> : ' '}QR Codes.
                            {!isMobileScreen ? <br/> : ' '}
                            And now,{isMobileScreen ? <br/> : ' '}create Link-in-bios.
                            <br/>
                        </h1>
                        <div className={styles.linksBlock}>
                            <a href="" className={styles.getStartedLink}>Get Started for Free</a>
                            <br />
                            <a href="" className={styles.getQuoteLink}>Get a Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;