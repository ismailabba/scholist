import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1} />
      <div className={styles.footerLegal}>
        <div className={styles.scholistAllRights}>
          © 2022 Scholist. All rights reserved.
        </div>
        <div className={styles.scholistAllRights}>Disclaimer Cookies</div>
      </div>
      <div className={styles.footerGridRow}>
        <div className={styles.footerMenu}>
          <img
            className={styles.footerlogoIcon}
            alt=""
            src="/footerlogo1111.svg"
          />
          <div className={styles.footerLinks}>
            <div className={styles.footerlinknav}>
              <div className={styles.navLink}>info@example.com</div>
            </div>
            <div className={styles.footerlinknav}>
              <div className={styles.navLink}>+1 234 567 9830</div>
            </div>
            <div className={styles.footerlinknav}>
              <div className={styles.navLink}>Address</div>
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <img
              className={styles.footericoninstagram}
              alt=""
              src="/footericoninstagram11.svg"
            />
            <img
              className={styles.footericonfacbook}
              alt=""
              src="/footericonfacbook11.svg"
            />
            <img
              className={styles.footericontwitter}
              alt=""
              src="/footericontwitter11.svg"
            />
            <img
              className={styles.footericonfacbook}
              alt=""
              src="/footericonlinkedin1.svg"
            />
            <img
              className={styles.footericonyoutube}
              alt=""
              src="/footericonyoutube11.svg"
            />
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.students}>Students</div>
          <div className={styles.footerLinks}>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>How it works</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Scholarships</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Community</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Services</div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.students}>Coaches</div>
          <div className={styles.footerLinks}>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>How it works</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Blog</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Mission</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Footer Link</div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.students}>Company</div>
          <div className={styles.footerLinks}>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>About Us</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Partners</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Careers</div>
            </div>
            <div className={styles.mainFooterLink}>
              <div className={styles.footerLink}>Contact</div>
            </div>
          </div>
        </div>
        <div className={styles.footerMenu1}>
          <div className={styles.students}>Join our Email List</div>
          <div className={styles.footerLinks4}>
            <div className={styles.mainFooterLink12}>
              <div className={styles.footerLink12}>
                Be the first to know about new scholarships, events, workshops
                and much more!
              </div>
            </div>
            <div className={styles.subscribeEmailTextBox}>
              <div className={styles.textBox} />
              <div className={styles.inputPlaceholder}>Email</div>
            </div>
            <div className={styles.buttonlarge}>
              <div className={styles.button} />
              <div className={styles.buttonText}>Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
