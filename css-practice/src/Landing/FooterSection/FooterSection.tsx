import styles from './FooterSection.module.css';

const FooterSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.column}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Why Bitly?</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Bitly 101</a>
                        </li>
                        <li>
                            <a className={styles.link}>Integrations & API</a>
                        </li>
                        <li>
                            <a className={styles.link}>Enterprise Class</a>
                        </li>
                        <li>
                            <a className={styles.link}>Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Products</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Link Management</a>
                        </li>
                        <li>
                            <a className={styles.link}>QR Codes</a>
                        </li>
                        <li>
                            <a className={styles.link}>Link-in-bio</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Solutions</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Social Media</a>
                        </li>
                        <li>
                            <a className={styles.link}>Digital Marketing</a>
                        </li>
                        <li>
                            <a className={styles.link}>Customer Service</a>
                        </li>
                        <li>
                            <a className={styles.link}>For Developers</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Features</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Branded Links</a>
                        </li>
                        <li>
                            <a className={styles.link}>Mobile Links</a>
                        </li>
                        <li>
                            <a className={styles.link}>Campaign Management & Analytics</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Resources</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Blog</a>
                        </li>
                        <li>
                            <a className={styles.link}>Resource Library</a>
                        </li>
                        <li>
                            <a className={styles.link}>Developers</a>
                        </li>
                        <li>
                            <a className={styles.link}>App Connectors</a>
                        </li>
                        <li>
                            <a className={styles.link}>Support</a>
                        </li>
                        <li>
                            <a className={styles.link}>Trust Center</a>
                        </li>
                        <li>
                            <a className={styles.link}>Browser Extension</a>
                        </li>
                        <li>
                            <a className={styles.link}>Mobile App</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Legal</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>Privacy Policy</a>
                        </li>
                        <li>
                            <a className={styles.link}>Cookie Policy</a>
                        </li>
                        <li>
                            <a className={styles.link}>Terms of Service</a>
                        </li>
                        <li>
                            <a className={styles.link}>Acceptable Use Policy</a>
                        </li>
                        <li>
                            <a className={styles.link}>Code of Conduct</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Company</h4>
                    <ul className={styles.sectionLinks}>
                        <li>
                            <a className={styles.link}>About Bitly</a>
                        </li>
                        <li>
                            <a className={styles.link}>Careers</a>
                        </li>
                        <li>
                            <a className={styles.link}>Partners</a>
                        </li>
                        <li>
                            <a className={styles.link}>Press</a>
                        </li>
                        <li>
                            <a className={styles.link}>Contact</a>
                        </li>
                        <li>
                            <a className={styles.link}>Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2021/08/bitly_logo.svg"
                    width="84"
                    height="42"
                    className={styles.logo}
                />
                <p className={styles.copyright}>
                    © 2023 Bitly | Handmade in New York City, Denver, Berlin, Bielefeld, and all over the world.
                </p>
                <div className={styles.socialMediaBlock}>
                    <a className={styles.socialMediaIconLink}>
                        <i className="fa-brands fa-twitter fa-xl" />
                    </a>
                    <a className={styles.socialMediaIconLink}>
                        <i className="fa-brands fa-instagram fa-xl" />
                    </a>
                    <a className={styles.socialMediaIconLink}>
                        <i className="fa-brands fa-linkedin fa-xl" />
                    </a>
                    <a className={styles.socialMediaIconLink}>
                        <i className="fa-brands fa-facebook fa-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
