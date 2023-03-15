

import styles from './OurClientsSection.module.css';

const OurClientsSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <h3 className={styles.title}>Loved by big and small brands everywhere</h3>
            <ul className={styles.clientsBlock}>
                <li className={styles.clientLogoItem}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/novasol.svg"
                        className={styles.clientLogo}
                    />
                </li>
                <li className={styles.clientLogoItem}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/big-fish.svg"
                        className={styles.clientLogo}
                    />
                </li>
                <li className={styles.clientLogoItem}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/marriott.svg"
                        className={styles.clientLogo}
                    />
                </li>
                <li className={styles.clientLogoItem}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/new-york-times.svg"
                        className={styles.clientLogo}
                    />
                </li>
                <li className={styles.clientLogoItem}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/electronic-arts.svg"
                        className={styles.clientLogo}
                    />
                </li>
            </ul>
        </div>
    )
};

export default OurClientsSection;