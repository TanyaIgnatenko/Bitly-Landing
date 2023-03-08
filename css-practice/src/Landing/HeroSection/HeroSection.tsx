import styles from './HeroSection.module.css';
const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftPart}>
                <h1 className={styles.title}>
                    {`We’ve expanded!
                    Shorten URLs. Generate QR Codes.
                    And now, create Link-in-bios.`}
                </h1>
                <div className={styles.linksBlock}>
                    <a className={styles.getStartedLink}>Get Started for Free</a>
                    <br />
                    <a className={styles.getQuoteLink}>Get a Quote</a>
                </div>
            </div>
            <div className={styles.rightPart}>
            </div>
        </div>
    );
};

export default HeroSection;