import styles from './StatisticsSection.module.css';
const StatisticsSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2022/06/globe.png"
                        width="550"
                        height="420"
                        className={styles.image}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <ul className={styles.statisticsBlock}>
                    <li className={styles.statisticsItem}>
                        <h3 className={styles.statisticsValue}>500K</h3>
                        <span className={styles.statisticsName}>global paying customers</span>
                    </li>
                    <li className={styles.statisticsItem}>
                        <h3 className={styles.statisticsValue}>57M</h3>
                        <span className={styles.statisticsName}>monthly active users</span>
                    </li>
                    <li className={styles.statisticsItem}>
                        <span className={styles.statisticsValue}>256M</span>
                        <span className={styles.statisticsName}>links & QR codes created monthly</span>
                    </li>
                    <li className={styles.statisticsItem}>
                        <span className={styles.statisticsValue}>10B</span>
                        <span className={styles.statisticsName}>connections (clicks & scans) monthly</span>
                    </li>
                    <li className={styles.statisticsItem}>
                        <span className={styles.statisticsValue}>800+</span>
                        <span className={styles.statisticsName}>app integrations</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StatisticsSection;