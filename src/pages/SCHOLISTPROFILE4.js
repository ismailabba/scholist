import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PersonalInfoContainer from "../components/PersonalInfoContainer";
import styles from "./SCHOLISTPROFILE4.module.css";
const SCHOLISTPROFILE4 = () => {
  const navigate = useNavigate();

  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onFrameButton1Click = useCallback(() => {
    navigate("/education-profile");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/student-activities-profile");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/education-profile");
  }, [navigate]);

  return (
    <div className={styles.personalProfile}>
      <Header
        headerlogo="/headerlogo.svg"
        vector="/vector511.svg"
        messages="/messages1.svg"
        notifications="/notifications1.svg"
        maskGroup="/mask-group1@2x.png"
        vector1="/vector6.svg"
        scholarshipsLine="/scholarships-line1.svg"
        servicesLine="/services-line1.svg"
        communityLine="/community-line1.svg"
        resources="/resources1.svg"
        onHeadernavLinkContainer1Click={onHeadernavLinkContainer1Click}
      />
      <div className={styles.body}>
        <div className={styles.header}>
          <b className={styles.scholistProfile}>{`Scholist Profile `}</b>
        </div>
        <PersonalInfoContainer
          onFrameButton1Click={onFrameButton1Click}
          onFrameButton2Click={onFrameButton2Click}
        />
        <div className={styles.body1}>
          <div className={styles.formBody}>
            <div className={styles.scholarshipQuestions2}>
              <div className={styles.quizQuestion}>
                <div className={styles.nameParent}>
                  <div className={styles.name}>Birthday</div>
                  <div className={styles.inputtextboxdatemonthParent}>
                    <input
                      className={styles.inputtextboxdatemonth}
                      type="text"
                      placeholder="MM"
                    />
                    <input
                      className={styles.inputtextboxdatemonth}
                      type="text"
                      placeholder="DD"
                    />
                    <input
                      className={styles.inputtextboxdateyear}
                      type="text"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.quizQuestion1}>
                <div className={styles.nameGroup}>
                  <div className={styles.name}>State of Residence</div>
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
                  <div className={styles.name2}>First Generation</div>
                  <div className={styles.yesNoRadioButtons}>
                    <div className={styles.buttonradio}>
                      <div className={styles.text}>Yes</div>
                      <div className={styles.radioCircleEmpty}>
                        <div className={styles.outerRadioContainer} />
                      </div>
                    </div>
                    <div className={styles.buttonradio}>
                      <div className={styles.text}>No</div>
                      <div className={styles.radioCircleEmpty}>
                        <div className={styles.outerRadioContainer} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.quizQuestion3}>
                <div className={styles.frameDiv}>
                  <div className={styles.name}>Gender</div>
                  <select className={styles.multiselectgender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion4}>
                <div className={styles.nameParent1}>
                  <div className={styles.name}>Citizenship Status</div>
                  <select className={styles.sofiadropdownsdropdown2}>
                    <option value="uscitizen">U.S Citizen</option>
                    <option value="nonuscitizen">Non-US Citizen</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion5}>
                <div className={styles.nameParent2}>
                  <div className={styles.name}>Disability</div>
                  <select className={styles.multiselectdisability}>
                    <option value="blind">Blind</option>
                    <option value="deaf">Deaf</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion6}>
                <div className={styles.nameParent3}>
                  <div className={styles.name}>Ethnicity</div>
                  <select className={styles.multiselectethnicity}>
                    <option value="african">Black/African</option>
                    <option value="white">White</option>
                    <option value="xhinese">Chinese</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion6}>
                <div className={styles.nameParent4}>
                  <div className={styles.name}>Religion</div>
                  <select className={styles.multiselectreligion}>
                    <option value="islam">Islam</option>
                    <option value="christianity">Christianity</option>
                    <option value="hindu">Hindu</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion6}>
                <div className={styles.nameParent5}>
                  <div className={styles.name8}>Personal Attributes</div>
                  <select className={styles.multiselectattributes}>
                    <option value="blackeyes">Black Eyes</option>
                    <option value="blue eyes">Blue eyes</option>
                  </select>
                </div>
              </div>
              <div className={styles.quizQuestion9}>
                <div className={styles.nameParent6}>
                  <div className={styles.name2}>Military Affiliation</div>
                  <div className={styles.yesNoRadioButtons1}>
                    <div className={styles.buttonradio}>
                      <div className={styles.text}>Yes</div>
                      <div className={styles.radioCircleEmpty}>
                        <div className={styles.outerRadioContainer} />
                      </div>
                    </div>
                    <div className={styles.buttonradio}>
                      <div className={styles.text}>No</div>
                      <div className={styles.radioCircleEmpty}>
                        <div className={styles.outerRadioContainer} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exitButton}>
            <div className={styles.frameParent}>
              <button className={styles.exitWrapper}>
                <div className={styles.exit}>Exit</div>
              </button>
              <button
                className={styles.vectorWrapper}
                onClick={onFrameButton4Click}
              >
                <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
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
              src="/footerlogo.svg"
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

export default SCHOLISTPROFILE4;
