import FAQAccordion from "./FAQAccordion/FAQAccordion";

import styles from './FAQSection.module.css';

const FAQSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <h3 className={styles.title}>Frequently asked questions</h3>
            <FAQAccordion />
        </div>
    )
};

export default FAQSection;