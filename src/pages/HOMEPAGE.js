import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HOMEPAGE.module.css";
const HOMEPAGE = () => {
  const navigate = useNavigate();

  const onButtonmediumClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonmedium1Click = useCallback(() => {
    // Please sync "ONBOARDING 1" to the project
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLinkToPageClick = useCallback(() => {
    navigate("/scholarships-category-page");
  }, [navigate]);

  const onLinkToPage1Click = useCallback(() => {
    // Please sync "COMMUNITIES" to the project
  }, []);

  const onLinkToPage2Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onLinkToPage3Click = useCallback(() => {
    // Please sync "ONBOARDING 1" to the project
  }, []);

  const onButtonlargeClick = useCallback(() => {
    navigate("/scholarships-description1");
  }, [navigate]);

  const onSeeMoreClick = useCallback(() => {
    navigate("/scholarships-category-page");
  }, [navigate]);

  const onSeeMore1Click = useCallback(() => {
    navigate("/communities");
  }, [navigate]);

  const onFooterLinkText1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onMainFooterLink2Click = useCallback(() => {
    navigate("/communities");
  }, [navigate]);

  const onMainFooterLink3Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
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
      <div className={styles.banner}>
        <div className={styles.bnnerBackgrround}>
          <div className={styles.graduate}>
            <div className={styles.graduateInner}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.bannerImageChoiceParent}>
                    <img
                      className={styles.bannerImageChoice}
                      alt=""
                      src="/banner-image-choice@2x.png"
                    />
                    <div className={styles.studentTestimony}>
                      <div className={styles.studentName}>{`Chelsea C. `}</div>
                      <div className={styles.studentQuote}>
                        “As a full time student with a part time job, Scholist
                        app reduced the time spent searching for scholarships on
                        different websites.”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.applying}>
            <div className={styles.frameParent}>
              <div className={styles.frameDiv}>
                <div className={styles.applyingToScholarshipsMadeParent}>
                  <b
                    className={styles.applyingToScholarships}
                  >{`Applying to scholarships made easy. `}</b>
                  <div className={styles.discoverTheRightScholarshipWrapper}>
                    <div className={styles.discoverTheRight}>
                      Discover the right scholarships for you
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonxxlargeWrapper}>
                <div className={styles.buttonxxlarge}>
                  <div className={styles.signUp}>Sign up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.howItWorks}>
        <div className={styles.homesectionHeader}>
          <b className={styles.sectionText}>How It Works</b>
        </div>
      </div>
      <div className={styles.homeSectionHowItWorks}>
        <div className={styles.howItWorks1}>
          <div className={styles.homesectionHeader1} data-animate-on-scroll>
            <b className={styles.sectionText1}>How It Works</b>
          </div>
        </div>
        <div className={styles.divider}>
          <img
            className={styles.homesectionDividerIcon}
            alt=""
            src="/homesection-divider.svg"
          />
        </div>
        <div className={styles.personalizedMatches}>
          <div className={styles.homehowItWorkssectionDesc}>
            <b className={styles.howItWorks2}>PERSONALIZED MATCHES</b>
            <div className={styles.details}>
              <div
                className={styles.details1}
              >{`Complete your profile to receive personalized Scholarship matches or search through our extensive database of scholarships `}</div>
              <button
                className={styles.linkToPage}
                onClick={onLinkToPageClick}
              >{`SEE SCHOLARSHIPS >`}</button>
            </div>
          </div>
          <img
            className={styles.homehowItWorksimg}
            alt=""
            src="/homehow-it-worksimg@2x.png"
          />
        </div>
        <div className={styles.communityAndSupport}>
          <div className={styles.homehowItWorkssectionDescParent}>
            <div className={styles.homehowItWorkssectionDesc}>
              <b className={styles.howItWorks3}>COMMUNITY AND SUPPORT</b>
              <div className={styles.details}>
                <div
                  className={styles.details1}
                >{`Access a full community of your peers to discuss frustrations and wins along the way.  Hear from other students just like you. `}</div>
                <button
                  className={styles.linkToPage}
                  onClick={onLinkToPage1Click}
                >{`SEE COMMUNITIES >`}</button>
              </div>
            </div>
            <div className={styles.homehowItWorkssectionDesc}>
              <b className={styles.howItWorks4}>Coaching and Mentors</b>
              <div className={styles.details}>
                <div
                  className={styles.details1}
                >{`Scholist offers 1:1 consultations with scholarship coaches. Find a coach to help with anything from FAFSA assitance to Essay writing. `}</div>
                <button
                  className={styles.linkToPage}
                  onClick={onLinkToPage2Click}
                >{`SEE SERVICES >`}</button>
              </div>
            </div>
          </div>
          <img
            className={styles.homehowItWorksimg}
            alt=""
            src="/homehow-it-worksimg1@2x.png"
          />
        </div>
        <div className={styles.communityAndSupport}>
          <div className={styles.homehowItWorkssectionDesc}>
            <b className={styles.howItWorks3}>Never Miss A Deadline</b>
            <div className={styles.details}>
              <div
                className={styles.details1}
              >{`Save scholarships, keep track of deadlines, and set reminders to keep you on track, right inside your own personal dashboard.   `}</div>
              <button
                className={styles.linkToPage}
                onClick={onLinkToPage3Click}
              >{`SIGN UP NOW TO GET STARTED >`}</button>
            </div>
          </div>
          <div className={styles.homehowItWorksimg1}>
            <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <div className={styles.partnershipStrip}>
          <div className={styles.seeWhatOthersAreSayingParent}>
            <div
              className={styles.seeWhatOthers}
            >{`See what others are saying: `}</div>
            <img
              className={styles.cgiStackedLockupBlue1Icon}
              alt=""
              src="/414388813cgistackedlockupblue1@2x.png"
            />
            <img
              className={styles.dbf43de48b00044eb5afIcon}
              alt=""
              src="/6102dbf43de48b00044eb5af@2x.png"
            />
            <img
              className={styles.futureFoundersColorLogoIcon}
              alt=""
              src="/future-founders--color-logo@2x.png"
            />
            <img
              className={styles.verizonLogo1Icon}
              alt=""
              src="/verizonlogo-1@2x.png"
            />
            <img
              className={styles.visaLogoIcon}
              alt=""
              src="/visa-logo@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.scholarshipSection}>
        <div className={styles.header}>
          <div className={styles.scholarships}>
            <b className={styles.scholarships1}>Scholarships</b>
          </div>
        </div>
        <div className={styles.scholarshipSection1}>
          <div className={styles.scholarshipCards}>
            <div className={styles.cardscholarshipslargeParent}>
              <div className={styles.cardscholarshipslarge}>
                <div className={styles.cardscholarshipsbackgroundlWrapper}>
                  <div className={styles.cardscholarshipsbackgroundl}>
                    <img
                      className={styles.image24Icon}
                      alt=""
                      src="/image-24@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.communityTitleParent}>
                  <div className={styles.communityTitle}>
                    Niche $50K “No Essay” Scholarship
                  </div>
                  <img
                    className={styles.bookmarkDisabledIcon}
                    alt=""
                    src="/bookmark-disabled.svg"
                  />
                </div>
                <div className={styles.membersWrapper}>
                  <div className={styles.members}>
                    Deadline: December 14, 2022
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>
                    Cover the cost of college without writing a single essay!
                    Niche is giving one student $50,000 to help pay for tuition,
                    housing...
                  </div>
                </div>
                <div className={styles.buttoncardscholarshipslargeWrapper}>
                  <div className={styles.buttoncardscholarshipslarge}>
                    <button
                      className={styles.buttonlarge}
                      onClick={onButtonlargeClick}
                    >
                      <img
                        className={styles.buttonTextIcon}
                        alt=""
                        src="/button-text.svg"
                      />
                    </button>
                    <button className={styles.buttonlarge1}>
                      <img
                        className={styles.buttonTextIcon1}
                        alt=""
                        src="/button-text1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.cardscholarshipslarge}>
                <div className={styles.cardscholarshipsbackgroundlWrapper}>
                  <div className={styles.cardscholarshipsbackgroundl}>
                    <img
                      className={styles.image24Icon}
                      alt=""
                      src="/image-24@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.communityTitleParent}>
                  <div className={styles.communityTitle}>
                    Niche $50K “No Essay” Scholarship
                  </div>
                  <img
                    className={styles.bookmarkDisabledIcon}
                    alt=""
                    src="/bookmark-disabled.svg"
                  />
                </div>
                <div className={styles.membersWrapper}>
                  <div className={styles.members}>
                    Deadline: December 14, 2022
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>
                    Cover the cost of college without writing a single essay!
                    Niche is giving one student $50,000 to help pay for tuition,
                    housing...
                  </div>
                </div>
                <div className={styles.buttoncardscholarshipslargeWrapper}>
                  <div className={styles.buttoncardscholarshipslarge}>
                    <button className={styles.buttonlarge}>
                      <img
                        className={styles.buttonTextIcon}
                        alt=""
                        src="/button-text.svg"
                      />
                    </button>
                    <button className={styles.buttonlarge1}>
                      <img
                        className={styles.buttonTextIcon1}
                        alt=""
                        src="/button-text1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardscholarshipslarge}>
              <div className={styles.cardscholarshipsbackgroundlWrapper}>
                <div className={styles.cardscholarshipsbackgroundl}>
                  <img
                    className={styles.image24Icon}
                    alt=""
                    src="/image-24@2x.png"
                  />
                </div>
              </div>
              <div className={styles.communityTitleParent}>
                <div className={styles.communityTitle}>
                  Niche $50K “No Essay” Scholarship
                </div>
                <img
                  className={styles.bookmarkDisabledIcon}
                  alt=""
                  src="/bookmark-disabled.svg"
                />
              </div>
              <div className={styles.membersWrapper}>
                <div className={styles.members}>
                  Deadline: December 14, 2022
                </div>
              </div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                  Cover the cost of college without writing a single essay!
                  Niche is giving one student $50,000 to help pay for tuition,
                  housing...
                </div>
              </div>
              <div className={styles.buttoncardscholarshipslargeWrapper}>
                <div className={styles.buttoncardscholarshipslarge}>
                  <button className={styles.buttonlarge}>
                    <img
                      className={styles.buttonTextIcon}
                      alt=""
                      src="/button-text.svg"
                    />
                  </button>
                  <button className={styles.buttonlarge1}>
                    <img
                      className={styles.buttonTextIcon1}
                      alt=""
                      src="/button-text1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className={styles.seeMore}
            onClick={onSeeMoreClick}
          >{`See More >`}</button>
        </div>
      </div>
      <div className={styles.scholarshipSection}>
        <div className={styles.header}>
          <div className={styles.scholarships}>
            <b className={styles.communities}>Communities</b>
          </div>
        </div>
        <div className={styles.scholarshipSection1}>
          <div className={styles.scholarshipCards}>
            <div className={styles.cardscholarshipslargeParent}>
              <div className={styles.cardscholarshipslarge}>
                <div className={styles.cardscholarshipsbackgroundlWrapper}>
                  <div className={styles.cardscholarshipsbackgroundl}>
                    <img
                      className={styles.image24Icon}
                      alt=""
                      src="/image-24@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.communityTitleParent}>
                  <div className={styles.communityTitle}>
                    Niche $50K “No Essay” Scholarship
                  </div>
                  <img
                    className={styles.bookmarkDisabledIcon}
                    alt=""
                    src="/bookmark-disabled.svg"
                  />
                </div>
                <div className={styles.membersWrapper}>
                  <div className={styles.members}>
                    Deadline: December 14, 2022
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>
                    Cover the cost of college without writing a single essay!
                    Niche is giving one student $50,000 to help pay for tuition,
                    housing...
                  </div>
                </div>
                <div className={styles.buttoncardscholarshipslargeWrapper}>
                  <div className={styles.buttoncardscholarshipslarge}>
                    <button className={styles.buttonlarge}>
                      <img
                        className={styles.buttonTextIcon}
                        alt=""
                        src="/button-text.svg"
                      />
                    </button>
                    <button className={styles.buttonlarge1}>
                      <img
                        className={styles.buttonTextIcon1}
                        alt=""
                        src="/button-text1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.cardscholarshipslarge}>
                <div className={styles.cardscholarshipsbackgroundlWrapper}>
                  <div className={styles.cardscholarshipsbackgroundl}>
                    <img
                      className={styles.image24Icon}
                      alt=""
                      src="/image-24@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.communityTitleParent}>
                  <div className={styles.communityTitle}>
                    Niche $50K “No Essay” Scholarship
                  </div>
                  <img
                    className={styles.bookmarkDisabledIcon}
                    alt=""
                    src="/bookmark-disabled.svg"
                  />
                </div>
                <div className={styles.membersWrapper}>
                  <div className={styles.members}>
                    Deadline: December 14, 2022
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>
                    Cover the cost of college without writing a single essay!
                    Niche is giving one student $50,000 to help pay for tuition,
                    housing...
                  </div>
                </div>
                <div className={styles.buttoncardscholarshipslargeWrapper}>
                  <div className={styles.buttoncardscholarshipslarge}>
                    <button className={styles.buttonlarge}>
                      <img
                        className={styles.buttonTextIcon}
                        alt=""
                        src="/button-text.svg"
                      />
                    </button>
                    <button className={styles.buttonlarge1}>
                      <img
                        className={styles.buttonTextIcon1}
                        alt=""
                        src="/button-text1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardscholarshipslarge}>
              <div className={styles.cardscholarshipsbackgroundlWrapper}>
                <div className={styles.cardscholarshipsbackgroundl}>
                  <img
                    className={styles.image24Icon}
                    alt=""
                    src="/image-24@2x.png"
                  />
                </div>
              </div>
              <div className={styles.communityTitleParent}>
                <div className={styles.communityTitle}>
                  Niche $50K “No Essay” Scholarship
                </div>
                <img
                  className={styles.bookmarkDisabledIcon}
                  alt=""
                  src="/bookmark-disabled.svg"
                />
              </div>
              <div className={styles.membersWrapper}>
                <div className={styles.members}>
                  Deadline: December 14, 2022
                </div>
              </div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                  Cover the cost of college without writing a single essay!
                  Niche is giving one student $50,000 to help pay for tuition,
                  housing...
                </div>
              </div>
              <div className={styles.buttoncardscholarshipslargeWrapper}>
                <div className={styles.buttoncardscholarshipslarge}>
                  <button className={styles.buttonlarge}>
                    <img
                      className={styles.buttonTextIcon}
                      alt=""
                      src="/button-text.svg"
                    />
                  </button>
                  <button className={styles.buttonlarge1}>
                    <img
                      className={styles.buttonTextIcon1}
                      alt=""
                      src="/button-text1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className={styles.seeMore}
            onClick={onSeeMore1Click}
          >{`See More >`}</button>
        </div>
      </div>
      <div className={styles.divider1}>
        <img
          className={styles.homesectionDividerIcon}
          alt=""
          src="/homesection-divider1.svg"
        />
      </div>
      <div className={styles.successStories}>
        <b className={styles.sectionText2}>Success Stories</b>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.cardtestimonialParent}>
          <div className={styles.cardtestimonial}>
            <img
              className={styles.cardtestimonialbackgroundIcon}
              alt=""
              src="/cardtestimonialbackground.svg"
            />
            <div className={styles.cardtestimonialdescription}>
              <div className={styles.amountAwarded}>
                <div className={styles.navActive}>Awarded $20,000</div>
                <div className={styles.lineUnderAmount} />
              </div>
              <div className={styles.nameAndMajor}>
                <div className={styles.nameAndMajorContainer}>
                  <p className={styles.joshuaP}>Joshua P.</p>
                  <p className={styles.graphicDesignMajor}>
                    Graphic Design Major
                  </p>
                </div>
              </div>
              <div className={styles.testimony}>
                <div className={styles.testimony1}>
                  “Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  vulputate fames ac sit duis.”
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardtestimonial1}>
            <img
              className={styles.cardtestimonialbackgroundIcon}
              alt=""
              src="/cardtestimonialbackground1.svg"
            />
            <div className={styles.cardtestimonialdescription}>
              <div className={styles.amountAwarded}>
                <div className={styles.navActive}>Awarded $15,000</div>
                <div className={styles.lineUnderAmount} />
              </div>
              <div className={styles.nameAndMajor}>
                <div className={styles.nameAndMajorContainer}>
                  <p className={styles.joshuaP}>{`Aaron F. `}</p>
                  <p className={styles.graphicDesignMajor}>
                    Chemical Engingeering Major
                  </p>
                </div>
              </div>
              <div className={styles.testimony}>
                <div className={styles.testimony1}>
                  “Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  vulputate fames ac sit duis ac etiam. Quis feugiat dolor sed
                  pharetra libero dignissim.”
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardtestimonial1}>
            <img
              className={styles.cardtestimonialbackgroundIcon}
              alt=""
              src="/cardtestimonialbackground2.svg"
            />
            <div className={styles.cardtestimonialdescription}>
              <div className={styles.amountAwarded}>
                <div className={styles.navActive}>Awarded $2,000</div>
                <div className={styles.lineUnderAmount} />
              </div>
              <div className={styles.nameAndMajor}>
                <div className={styles.nameAndMajorContainer}>
                  <p className={styles.joshuaP}>{`Cameron R. `}</p>
                  <p className={styles.graphicDesignMajor}>
                    Architecture Major
                  </p>
                </div>
              </div>
              <div className={styles.testimony}>
                <div className={styles.testimony1}>
                  “Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  vulputate fames ac sit duis ac etiam.”
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardtestimonial1}>
            <img
              className={styles.cardtestimonialbackgroundIcon}
              alt=""
              src="/cardtestimonialbackground3.svg"
            />
            <div className={styles.cardtestimonialdescription}>
              <div className={styles.amountAwarded}>
                <div className={styles.navActive}>Awarded $5,000</div>
                <div className={styles.lineUnderAmount} />
              </div>
              <div className={styles.nameAndMajor}>
                <div className={styles.nameAndMajorContainer}>
                  <p className={styles.joshuaP}>{`Samira S. `}</p>
                  <p className={styles.graphicDesignMajor}>
                    English Literature Major
                  </p>
                </div>
              </div>
              <div className={styles.testimony}>
                <div className={styles.testimony7}>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p
                    className={styles.loremIpsumDolor}
                  >{`“Lorem ipsum dolor sit amet consectetur. Volutpat turpis vulputate fames ac sit duis ac etiam. Quis feugiat dolor sed `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialVideo}>
        <video className={styles.wrapper} controls>
          <source />
        </video>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerGridRow}>
          <div className={styles.footerMenu}>
            <img
              className={styles.footerlogoIcon}
              alt=""
              src="/footerlogo1.svg"
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
                src="/footericoninstagram.svg"
              />
              <img
                className={styles.footericonfacbook}
                alt=""
                src="/footericonfacbook.svg"
              />
              <img
                className={styles.footericontwitter}
                alt=""
                src="/footericontwitter.svg"
              />
              <img
                className={styles.footericonfacbook}
                alt=""
                src="/footericonlinkedin.svg"
              />
              <img
                className={styles.footericonyoutube}
                alt=""
                src="/footericonyoutube.svg"
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
                  <div
                    className={styles.footerLink1}
                    onClick={onFooterLinkText1Click}
                  >
                    Scholarships
                  </div>
                </div>
                <div
                  className={styles.mainFooterLink2}
                  onClick={onMainFooterLink2Click}
                >
                  <div className={styles.footerLink}>Community</div>
                </div>
                <div
                  className={styles.mainFooterLink2}
                  onClick={onMainFooterLink3Click}
                >
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
                <input
                  className={styles.subscribeEmailTextBox}
                  type="text"
                  placeholder="Email"
                />
                <div className={styles.buttonlarge12}>
                  <div className={styles.button} />
                  <div className={styles.buttonText2}>Sign Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLegal}>
          <div className={styles.signUp}>
            © 2022 Scholist. All rights reserved.
          </div>
          <div className={styles.signUp}>Disclaimer Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default HOMEPAGE;
