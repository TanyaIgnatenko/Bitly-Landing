import ActionLink from '../components/ActionLink/ActionLink';

import styles from './CTASection.module.css';
const CTASection = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <h3 className={styles.title}>More than a free link shortener</h3>
                <ActionLink href="" size="l" className={styles.ctaLink}>Get Started</ActionLink>
            </div>
        </div>
    );
};

export default CTASection;