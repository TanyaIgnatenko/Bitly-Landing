import styles from './HeroSection.module.css';
const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        We’ve expanded!
                        <br/>
                        Shorten URLs. Generate QR Codes.
                        <br/>
                        And now, create Link-in-bios.
                        <br/>
                    </h1>
                    <div className={styles.linksBlock}>
                        <a className={styles.getStartedLink}>Get Started for Free</a>
                        <br />
                        <a className={styles.getQuoteLink}>Get a Quote</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;