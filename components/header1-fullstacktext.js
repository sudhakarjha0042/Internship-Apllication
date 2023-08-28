import styles from "./header1-fullstacktext.module.css";
const Header1Fullstacktext = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading1}>
        <b className={styles.fullStackWebContainer}>
          <p className={styles.fullStackWeb}>
            Full Stack Web Development Training (Student Offer)
          </p>
        </b>
      </div>
      <div className={styles.divtutorRow}>
        <div className={styles.divtutorCol}>
          <div className={styles.divtutorMeta}>
            <div className={styles.link}>
              <img
                className={styles.xzectLogoe28093space150x1Icon}
                alt=""
                src="/xzectlogoe28093space150x150png2@2x.png"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.byXzect}>
                <span>{`By `}</span>
                <span className={styles.xzect}>Xzect</span>
                <span>{` `}</span>
              </div>
              <div className={styles.byXzect}>
                <span>{`Categories: `}</span>
                <span className={styles.xzect}>Featured</span>
                <span>{`, `}</span>
                <span className={styles.xzect}>Live</span>
                <span>{`, `}</span>
                <span className={styles.xzect}>Software Development</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divtutorColAuto}>
          <div className={styles.divtutorCourseDetailsActio}>
            <div className={styles.link1}>
              <div className={styles.pseudo}>
                <div className={styles.icon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector52.svg"
                  />
                </div>
              </div>
              <div className={styles.wishlist}>Wishlist</div>
            </div>
            <div className={styles.link2}>
              <div className={styles.pseudo1}>
                <div className={styles.icon1}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector53.svg"
                  />
                </div>
              </div>
              <div className={styles.share}>Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1Fullstacktext;
