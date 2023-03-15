import styles from './ShortenLinkSection.module.css';

const ShortenLinkSection = () => {
  return (
      <div className={styles.contentWrapper}>
          <div className={styles.content}>
              <div className={styles.firstRow}>
                  <input placeholder="Shorten your link" className={styles.input}/>
                  <button className={styles.shortenButton}>Shorten</button>
              </div>
              <p className={styles.inputSignature}>
                By clicking SHORTEN, you are agreeing to Bitly’s <a href="" className={styles.link}>Terms of Service</a>, <a href="" className={styles.link}>Privacy Policy</a>, and <a href="" className={styles.link}>Acceptable Use Policy</a>.
              </p>
          </div>
      </div>
  );
};

export default ShortenLinkSection;