import { useCallback } from "react";
import Header from "../components/Header";
import PersonalInfoContainer from "../components/PersonalInfoContainer";
import styles from "./PersonalProfile.module.css";
const PersonalProfile = () => {
  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  return (
    <div className={styles.studentActivitiesProfile}>
      <Header
        headerlogo="/headerlogo1.svg"
        vector="/vector511.svg"
        messages="/messages1.svg"
        notifications="/notifications1.svg"
        maskGroup="/mask-group1@2x.png"
        vector1="/vector121.svg"
        scholarshipsLine="/scholarships-line1.svg"
        servicesLine="/services-line1.svg"
        communityLine="/community-line1.svg"
        resources="/resources1.svg"
        headerlogoWidth="604.51px"
        menuWidth="263px"
        onHeadernavLinkContainer1Click={onHeadernavLinkContainer1Click}
      />
      <div className={styles.body}>
        <div className={styles.header}>
          <b className={styles.scholistProfile}>{`Scholist Profile `}</b>
        </div>
        <PersonalInfoContainer />
        <div className={styles.formBody}>
          <div className={styles.scholarshipQuestions2Wrapper}>
            <div className={styles.scholarshipQuestions2}>
              <div className={styles.quizQuestion}>
                <div className={styles.nameParent}>
                  <div className={styles.name}>Student Organizations</div>
                  <select className={styles.multiselectdefault}>
                    <option value="texas">Texas</option>
                    <option value="newyork">New York</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion}>
                <div className={styles.nameGroup}>
                  <div className={styles.name}>Honor Societies</div>
                  <select className={styles.multiselectdefault}>
                    <option value="texas">Texas</option>
                    <option value="newyork">New York</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion2}>
                <div className={styles.nameContainer}>
                  <div className={styles.name}>Fraternity</div>
                  <textarea className={styles.multiselectdefault2} />
                </div>
              </div>
              <div className={styles.quizQuestion3}>
                <div className={styles.frameDiv}>
                  <div className={styles.name}>Sorority</div>
                  <textarea className={styles.multiselectdefault2} />
                </div>
              </div>
              <div className={styles.quizQuestion4}>
                <div className={styles.nameParent1}>
                  <div className={styles.name}>Sports</div>
                  <select className={styles.multiselectdefault}>
                    <option value="texas">Texas</option>
                    <option value="newyork">New York</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion5}>
                <div className={styles.nameParent2}>
                  <div className={styles.name}>Perfoming Arts</div>
                  <select className={styles.multiselectdefault}>
                    <option value="texas">Texas</option>
                    <option value="newyork">New York</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exitButton}>
            <div className={styles.frameParent}>
              <button className={styles.exitWrapper}>
                <div className={styles.exit}>Exit</div>
              </button>
              <button className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector21111.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerGridRow}>
          <div className={styles.footerMenu}>
            <img
              className={styles.footerlogoIcon}
              alt=""
              src="/footerlogo11.svg"
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
                src="/footericoninstagram1.svg"
              />
              <img
                className={styles.footericonfacbook}
                alt=""
                src="/footericonfacbook1.svg"
              />
              <img
                className={styles.footericontwitter}
                alt=""
                src="/footericontwitter1.svg"
              />
              <img
                className={styles.footericonfacbook}
                alt=""
                src="/footericonlinkedin1.svg"
              />
              <img
                className={styles.footericonyoutube}
                alt=""
                src="/footericonyoutube1.svg"
              />
            </div>
          </div>
          <div className={styles.footerMenuParent}>
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
                    Be the first to know about new scholarships, events,
                    workshops and much more!
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
        <div className={styles.footerLegal}>
          <div className={styles.scholistAllRights}>
            © 2022 Scholist. All rights reserved.
          </div>
          <div className={styles.scholistAllRights}>Disclaimer Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
