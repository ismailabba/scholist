import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const onButtonmediumClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonmedium1Click = useCallback(() => {
    // Please sync "ONBOARDING 1" to the project
  }, []);

  const onButtonxxlargeClick = useCallback(() => {
    navigate("/student-activities-profile");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.navBar}>
        <div className={styles.headertopNavsecondary}>
          <div className={styles.rightSideSecondaryNav}>
            <div className={styles.headerdropDownlang}>
              <img
                className={styles.languageIcon}
                alt=""
                src="/language-icon1.svg"
              />
              <div className={styles.language}>Language</div>
              <img className={styles.downIcon} alt="" src="/down-icon1.svg" />
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
                  src="/headerlogo11.svg"
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
                  src="/vector311.svg"
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
        <div className={styles.leftPanel}>
          <div className={styles.image131Parent}>
            <img
              className={styles.image131Icon}
              alt=""
              src="/image-131@2x.png"
            />
            <div className={styles.welcomeToScholistParent}>
              <b className={styles.welcomeToScholistContainer}>
                <p className={styles.welcome}>{`Welcome `}</p>
                <p className={styles.welcome}>To Scholist!</p>
              </b>
              <div className={styles.applyingToScholarships}>
                Applying to scholarships made easy.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.createYourAccount}>
            <div className={styles.header}>
              <b className={styles.login1}>Login</b>
            </div>
            <div className={styles.email}>
              <input
                className={styles.inputtextboxnoLabel}
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className={styles.password}>
              <input
                className={styles.inputtextboxnoLabel}
                type="text"
                placeholder="Create a password"
              />
            </div>
            <div className={styles.loginButton}>
              <button
                className={styles.buttonxxlarge}
                onClick={onButtonxxlargeClick}
              >
                <div className={styles.login2}> Login</div>
              </button>
            </div>
            <div className={styles.termsAndCondition}>
              <div className={styles.bySubmittingThisFormYouCWrapper}>
                <div className={styles.bySubmittingThisContainer}>
                  <span>{`By submitting this form, you confirm that you have read and agree to the `}</span>
                  <b
                    className={styles.termsConditions}
                  >{`Terms & Conditions.`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
