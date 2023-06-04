import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";
const Welcome = () => {
  const navigate = useNavigate();

  const onButtonmediumClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonmedium1Click = useCallback(() => {
    // Please sync "ONBOARDING 1" to the project
  }, []);

  const onButtonxxlargeClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.welcome}>
      <div className={styles.navBar}>
        <div className={styles.headertopNavsecondary}>
          <div className={styles.rightSideSecondaryNav}>
            <div className={styles.headerdropDownlang}>
              <img
                className={styles.languageIcon}
                alt=""
                src="/language-icon.svg"
              />
              <div className={styles.language}>Language</div>
              <img className={styles.downIcon} alt="" src="/down-icon.svg" />
            </div>
          </div>
          <div className={styles.leftSideSecondaryNav}>
            <div className={styles.headertopNavlinkParent}>
              <div className={styles.headertopNavlink}>
                <div className={styles.language}>Students</div>
                <div className={styles.lineUnderLink} />
              </div>
              <div className={styles.headertopNavlink}>
                <div className={styles.language}>Coaches</div>
                <div className={styles.lineUnderLink1} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headertopNavprimary}>
          <div className={styles.leftSideTopNavParent}>
            <div className={styles.leftSideTopNav}>
              <div className={styles.headerlogoParent}>
                <img
                  className={styles.headerlogoIcon}
                  alt=""
                  src="/headerlogo2.svg"
                />
                <div className={styles.topNavLeft}>
                  <div className={styles.headernavLinkParent}>
                    <a className={styles.headernavLink}>
                      <div className={styles.navActive}>Home</div>
                    </a>
                    <Link className={styles.headernavLink1} to="/services">
                      <div className={styles.navActive}>Services</div>
                    </Link>
                    <a className={styles.headernavLink2}>
                      <div className={styles.navActive}>Scholarships</div>
                    </a>
                    <a className={styles.headernavLink2}>
                      <div className={styles.navActive}>{`Community `}</div>
                    </a>
                    <div className={styles.headernavLink4}>
                      <div className={styles.navActive}>Resources</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightSideTopNav}>
              <button className={styles.menu}>
                <img className={styles.vectorIcon} alt="" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector11111.svg"
                />
              </button>
              <div className={styles.register}>
                <button
                  className={styles.buttonmedium}
                  onClick={onButtonmediumClick}
                >
                  <div className={styles.buttonText}>Login</div>
                </button>
                <button
                  className={styles.buttonmedium1}
                  onClick={onButtonmedium1Click}
                >
                  <div className={styles.buttonText1}>Sign Up</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.welcome1}>
          <div className={styles.headerImage}>
            <img
              className={styles.footerlogoIcon}
              alt=""
              src="/footerlogo2.svg"
            />
          </div>
          <div className={styles.welcome2}>
            <b className={styles.welcomeToScholist}>Welcome to Scholist!</b>
          </div>
          <div className={styles.continue}>
            <div className={styles.wouldYouLikeContainer}>
              <p className={styles.wouldYouLike}>Would you like to continue</p>
              <p className={styles.wouldYouLike}>completing your profile?</p>
            </div>
          </div>
          <div className={styles.continueButton}>
            <button
              className={styles.buttonxxlarge}
              onClick={onButtonxxlargeClick}
            >
              <div className={styles.continue1}>Continue</div>
            </button>
          </div>
          <div className={styles.noThanks}>
            <div className={styles.noThanksIllCompleteMyPrWrapper}>
              <div className={styles.noThanksIll}>
                No thanks, I’ll complete my profile later.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
