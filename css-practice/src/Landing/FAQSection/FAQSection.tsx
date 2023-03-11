import FAQAccordion from "./FAQAccordion/FAQAccordion";

import styles from './FAQSection.module.css';

const FAQSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <FAQAccordion />
        </div>
    )
};

export default FAQSection;