

import styles from './OurClientsSection.module.css';

const OurClientsSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <h3 className={styles.title}>Loved by big and small brands everywhere</h3>
            <div className={styles.clientsBlock}>
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/novasol.svg"
                    className={styles.clientLogo}
                />
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/big-fish.svg"
                    className={styles.clientLogo}
                />
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/marriott.svg"
                    className={styles.clientLogo}
                />
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/new-york-times.svg"
                    className={styles.clientLogo}
                />
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/electronic-arts.svg"
                    className={styles.clientLogo}
                />
            </div>
        </div>
    )
};

export default OurClientsSection;