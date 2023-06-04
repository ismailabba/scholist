import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SERVICES.module.css";
const SERVICES = () => {
  const navigate = useNavigate();

  const onButtonmediumClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonmedium1Click = useCallback(() => {
    // Please sync "ONBOARDING 1" to the project
  }, []);

  const onButtonsmallClick = useCallback(() => {
    navigate("/coach-page");
  }, [navigate]);

  return (
    <div className={styles.services}>
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
                      <div className={styles.language}>Home</div>
                    </a>
                    <Link className={styles.headernavLink1} to="/services">
                      <div className={styles.language}>Services</div>
                    </Link>
                    <a className={styles.headernavLink2}>
                      <div className={styles.language}>Scholarships</div>
                    </a>
                    <a className={styles.headernavLink2}>
                      <div className={styles.language}>{`Community `}</div>
                    </a>
                    <div className={styles.headernavLink4}>
                      <div className={styles.language}>Resources</div>
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
      <form className={styles.servicesHeader}>
        <b className={styles.popularServices}>Popular Services</b>
      </form>
      <div className={styles.sericeTypes}>
        <div className={styles.body}>
          <div className={styles.cardscholarshipspopularServ}>
            <img
              className={styles.scholarshipspopularServicesIcon}
              alt=""
              src="/scholarshipspopular-services@2x.png"
            />
            <div className={styles.tag}>
              <div className={styles.scholarshipServicesParent}>
                <div className={styles.scholarshipServices}>
                  Scholarship Services
                </div>
                <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServ1}>
            <img
              className={styles.scholarshipspopularServicesIcon}
              alt=""
              src="/scholarshipspopular-services1@2x.png"
            />
            <div className={styles.tag}>
              <div className={styles.essayReviewParent}>
                <div className={styles.scholarshipServices}>Essay Review</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServ1}>
            <img
              className={styles.scholarshipspopularServicesIcon}
              alt=""
              src="/scholarshipspopular-services2@2x.png"
            />
            <div className={styles.tag2}>
              <div className={styles.essayReviewParent}>
                <div className={styles.scholarshipServices}>Resume Help</div>
                <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServ1}>
            <img
              className={styles.scholarshipspopularServicesIcon}
              alt=""
              src="/scholarshipspopular-services3@2x.png"
            />
            <div className={styles.tag3}>
              <div className={styles.essayReviewParent}>
                <div className={styles.scholarshipServices}>Interview Prep</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServ1}>
            <img
              className={styles.scholarshipspopularServicesIcon}
              alt=""
              src="/scholarshipspopular-services4@2x.png"
            />
            <div className={styles.tag3}>
              <div className={styles.essayReviewParent}>
                <div className={styles.scholarshipServices}>
                  FAFSA Assistance
                </div>
                <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesInner}>
        <div className={styles.frameParent}>
          <div className={styles.cardscholarshipspopularServParent}>
            <div className={styles.cardscholarshipspopularServ1}>
              <img
                className={styles.unsplashtxas1xgtvjoIcon}
                alt=""
                src="/unsplashtxas1xgtvjo@2x.png"
              />
              <div className={styles.tag}>
                <div className={styles.essayReviewParent}>
                  <div className={styles.scholarshipServices1}>
                    Scholarship Services
                  </div>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/vector211.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardscholarshipspopularServ1}>
              <img
                className={styles.unsplashziwachjdirmIcon}
                alt=""
                src="/unsplashziwachjdirm@2x.png"
              />
              <div className={styles.tag}>
                <div className={styles.essayReviewGroup}>
                  <div className={styles.scholarshipServices1}>
                    Essay Review
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector122.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServParent}>
            <div className={styles.cardscholarshipspopularServ1}>
              <img
                className={styles.unsplashoxhaiwcftOIcon}
                alt=""
                src="/unsplashoxhaiwcft-o@2x.png"
              />
              <div className={styles.tag2}>
                <div className={styles.essayReviewParent}>
                  <div className={styles.scholarshipServices1}>Resume Help</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2111.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardscholarshipspopularServ1}>
              <img
                className={styles.unsplashoxhaiwcftOIcon}
                alt=""
                src="/unsplashef7hn40wbaq@2x.png"
              />
              <div className={styles.tag3}>
                <div className={styles.essayReviewParent}>
                  <div className={styles.scholarshipServices1}>
                    Interview Prep
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector122.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardscholarshipspopularServ1}>
            <img
              className={styles.unsplashoxhaiwcftOIcon}
              alt=""
              src="/unsplashtqq4bwn-ufs@2x.png"
            />
            <div className={styles.tag3}>
              <div className={styles.essayReviewParent}>
                <div className={styles.scholarshipServices1}>
                  FAFSA Assistance
                </div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector2111.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.pageDivider} />
      </div>
      <div className={styles.coachesHeader}>
        <b className={styles.allCoaches}>All Coaches</b>
      </div>
      <div className={styles.filters}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.tagfilterSortParent}>
              <div className={styles.tagfilterSort}>
                <div className={styles.buttonText2}>Service Options</div>
              </div>
              <div className={styles.tagfilterSort}>
                <div className={styles.buttonText3}>Coach Details</div>
              </div>
            </div>
            <div className={styles.tagfilterSortParent}>
              <div className={styles.tagfilterSort2}>
                <div className={styles.buttonText4}>Budget</div>
              </div>
              <div className={styles.tagfilterSort2}>
                <div className={styles.buttonText5}>Availability</div>
              </div>
            </div>
          </div>
          <div className={styles.tagfilterSort4}>
            <div className={styles.buttonTextParent}>
              <div className={styles.buttonText6}>Sort by</div>
              <img
                className={styles.vectorIcon12}
                alt=""
                src="/vector411.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filters1}>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.serviceOptionsWrapper}>
                <div className={styles.serviceOptions}>Service Options</div>
              </div>
              <div className={styles.tagfilterSort5}>
                <div className={styles.serviceOptions}>Coach Details</div>
              </div>
              <div className={styles.serviceOptionsWrapper}>
                <div className={styles.serviceOptions}>Budget</div>
              </div>
              <div className={styles.availabilityWrapper}>
                <div className={styles.serviceOptions}>Availability</div>
              </div>
            </div>
          </div>
          <div className={styles.serviceOptionsWrapper}>
            <div className={styles.sortByParent}>
              <div className={styles.serviceOptions}>{`Sort by `}</div>
              <img
                className={styles.vectorIcon13}
                alt=""
                src="/vector411.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coaches}>
        <div className={styles.cardcoachsmallParent}>
          <div className={styles.cardcoachsmall}>
            <img
              className={styles.cardcoachprofileImgsmallIcon}
              alt=""
              src="/cardcoachprofile-imgsmall@2x.png"
            />
            <div className={styles.card}>
              <div className={styles.buttonsmallParent}>
                <button
                  className={styles.buttonsmall}
                  onClick={onButtonsmallClick}
                >
                  <div className={styles.button} />
                  <div className={styles.buttonText8}>See more</div>
                </button>
                <div className={styles.buttonsmall1}>
                  <div className={styles.button1} />
                  <div className={styles.buttonText9}>Join</div>
                </div>
              </div>
              <div className={styles.cardChild} />
              <div className={styles.cardcoachdescriptionsmall}>
                <div className={styles.cardcoachdescription}>
                  <div className={styles.language}>John Stanley</div>
                  <div className={styles.coachReviewStars}>
                    <img className={styles.starsIcon} alt="" src="/stars.svg" />
                    <div className={styles.members}>200</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Essay Reviews</li>
                      <li>Scholarship Consultations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon1}
              alt=""
              src="/cardcoachprofile-imgsmall1@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Steven Cranos</div>
                  <div className={styles.coachReviewStars}>
                    <img
                      className={styles.starsIcon1}
                      alt=""
                      src="/stars1.svg"
                    />
                    <div className={styles.members}>5</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Interview Prep</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon2}
              alt=""
              src="/cardcoachprofile-imgsmall2@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Evan Shafer</div>
                  <div className={styles.coachReviewStars}>
                    <img className={styles.starsIcon} alt="" src="/stars.svg" />
                    <div className={styles.members}>310</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>FAFSA Assistance</li>
                      <li>Essay Review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon1}
              alt=""
              src="/cardcoachprofile-imgsmall3@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Bryan Riley</div>
                  <div className={styles.coachReviewStars}>
                    <img
                      className={styles.starsIcon}
                      alt=""
                      src="/stars2.svg"
                    />
                    <div className={styles.members}>15</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Resume Help</li>
                      <li>FAFSA Assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coaches}>
        <div className={styles.cardcoachsmallParent}>
          <div className={styles.cardcoachsmall4}>
            <div className={styles.cardcoachprofileImgsmall}>
              <img
                className={styles.unsplashc2nf5iponz0Icon}
                alt=""
                src="/unsplashc2nf5iponz0@2x.png"
              />
            </div>
            <div className={styles.card}>
              <div className={styles.buttonsmallParent}>
                <div className={styles.buttonsmall1}>
                  <div className={styles.button} />
                  <div className={styles.buttonText9}>See more</div>
                </div>
                <div className={styles.buttonsmall9}>
                  <div className={styles.button1} />
                  <div className={styles.buttonText9}>Join</div>
                </div>
              </div>
              <div className={styles.cardChild} />
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription}>
                  <div className={styles.language}>John Stanley</div>
                  <div className={styles.coachReviewStars}>
                    <img className={styles.starsIcon} alt="" src="/stars.svg" />
                    <div className={styles.members}>200</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Essay Reviews</li>
                      <li>Scholarship Consultations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon1}
              alt=""
              src="/cardcoachprofile-imgsmall1@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Steven Cranos</div>
                  <div className={styles.coachReviewStars}>
                    <img
                      className={styles.starsIcon1}
                      alt=""
                      src="/stars1.svg"
                    />
                    <div className={styles.members}>5</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Interview Prep</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon2}
              alt=""
              src="/cardcoachprofile-imgsmall2@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Evan Shafer</div>
                  <div className={styles.coachReviewStars}>
                    <img className={styles.starsIcon} alt="" src="/stars.svg" />
                    <div className={styles.members}>310</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>FAFSA Assistance</li>
                      <li>Essay Review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
          <div className={styles.cardcoachsmall1}>
            <img
              className={styles.cardcoachprofileImgsmallIcon1}
              alt=""
              src="/cardcoachprofile-imgsmall3@2x.png"
            />
            <div className={styles.card1}>
              <div className={styles.buttonsmall2}>
                <div className={styles.button} />
                <div className={styles.buttonText9}>See more</div>
              </div>
              <div className={styles.buttonsmall3}>
                <div className={styles.button1} />
                <div className={styles.buttonText9}>Join</div>
              </div>
              <div className={styles.cardcoachdescriptionsmall1}>
                <div className={styles.cardcoachdescription1}>
                  <div className={styles.communityTitle1}>Bryan Riley</div>
                  <div className={styles.coachReviewStars}>
                    <img
                      className={styles.starsIcon}
                      alt=""
                      src="/stars2.svg"
                    />
                    <div className={styles.members}>15</div>
                  </div>
                  <div className={styles.description}>
                    <ul className={styles.essayReviewsScholarshipCons}>
                      <li className={styles.essayReviews}>Resume Help</li>
                      <li>FAFSA Assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={styles.cardiconBookmark1}
                alt=""
                src="/cardicon-bookmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seeMore}>
        <div className={styles.buttonlarge}>
          <div className={styles.button16} />
          <div className={styles.buttonText9}>See more</div>
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
                <div className={styles.buttonlarge1}>
                  <div className={styles.button17} />
                  <div className={styles.buttonText9}>Sign Up</div>
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

export default SERVICES;
