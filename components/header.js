import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img
          className={styles.linkXzectLogoTitleLight}
          alt=""
          src="/link--xzectlogotitlelightpng@2x.png"
        />
        <div className={styles.menuIcon} onClick={() => {
          const menuItems = document.querySelector(`.${styles.menuItems}`);
          menuItems.classList.toggle(`${styles.active}`);
        }}>
          <i className="fa fa-bars">hi</i>
        </div>
        <div className={`${styles.menuItems}`}>
          <div className={styles.frame1}>
            <a href="#blog" className={`${styles.itemLink} ${styles.link}`}>Blog</a>
          </div>
          <div className={styles.frame1}>
            <a href="https://xzect.com" className={`${styles.itemLink} ${styles.link}`}>Xzect.com</a>
          </div>
          <div className={styles.frame1}>
            <a href="#courses" className={`${styles.itemLink} ${styles.link}`}>Courses</a>
          </div>
          <div className={styles.frame3}>
            <a href="#contact" className={`${styles.itemLink} ${styles.link}`}>Contact</a>
          </div>
        </div>
        <div className={styles.loginBox}>
          <a href="#login" className={`${styles.itemLink} ${styles.link}`}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;