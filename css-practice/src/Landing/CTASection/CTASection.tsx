

import styles from './CTASection.module.css';
const CTASection = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <h3 className={styles.title}>More than a free link shortener</h3>
                <a href="" className={styles.ctaLink}>Get Started</a>
            </div>
        </div>
    );
};

export default CTASection;