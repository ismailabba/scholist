import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./CoachPage.module.css";
const CoachPage = () => {
  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  return (
    <div className={styles.coachPage}>
      <Header
        headerlogo="/headerlogo.svg"
        vector="/vector14.svg"
        messages="/messages11.svg"
        notifications="/notifications11.svg"
        maskGroup="/mask-group11@2x.png"
        vector1="/vector71.svg"
        scholarshipsLine="/scholarships-line1.svg"
        servicesLine="/services-line1.svg"
        communityLine="/community-line1.svg"
        resources="/resources1.svg"
        onHeadernavLinkContainer1Click={onHeadernavLinkContainer1Click}
      />
      <div className={styles.header}>
        <div className={styles.backToServices}>{`< Back to services`}</div>
      </div>
      <div className={styles.coachdetailsprofile}>
        <div className={styles.coachdetailsprofileImgParent}>
          <div className={styles.coachdetailsprofileImg}>
            <b className={styles.coachDetails}>Coach Details</b>
            <img
              className={styles.cardimgsmallshadowIcon}
              alt=""
              src="/cardimgsmallshadow@2x.png"
            />
          </div>
          <div className={styles.coachdetailscoachInfo}>
            <div className={styles.writeReviewText}>
              <b className={styles.saraWinters}>Sara Winters</b>
              <div className={styles.scholarshipEssayExpertise}>
                Scholarship Essay Expertise
              </div>
              <div className={styles.coachReviewStars}>
                <img className={styles.starsIcon} alt="" src="/stars3.svg" />
                <div className={styles.members}>2,012</div>
              </div>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector72.svg" />
                <div className={styles.hoursTutoring}>150 hours tutoring</div>
              </div>
              <div className={styles.hourlyRate4000Wrapper}>
                <div className={styles.hoursTutoring}>Hourly Rate: $40.00</div>
              </div>
            </div>
            <div className={styles.buttonlarge}>
              <div className={styles.button} />
              <div className={styles.buttonText}>Book Now</div>
            </div>
          </div>
        </div>
        <div className={styles.coachdetailsprofileChild} />
      </div>
      <div className={styles.divider}>
        <div className={styles.pageDivider} />
      </div>
      <div className={styles.aboutTheCoach}>
        <b className={styles.aboutTheCoach1}>About the coach</b>
      </div>
      <div className={styles.bio}>
        <div className={styles.bio1}>
          <div className={styles.bio2}>Bio</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Augue vitae phasellus id
            tortor leo pellentesque. A rhoncus egestas penatibus nullam risus.
            Pharetra amet sodales proin orci amet sagittis pulvinar ultrices.
            Elementum vel nibh volutpat neque scelerisque a enim luctus massa.
          </div>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.policies}>
          <div className={styles.bio2}>Education</div>
          <div className={styles.policiesInner}>
            <div className={styles.universityOfPrestigeWrapper}>
              <div className={styles.universityOfPrestige}>
                University of Prestige
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.policies2}>
          <div className={styles.bio2}>Policies</div>
          <div className={styles.frameParent}>
            <div className={styles.universityOfPrestigeWrapper}>
              <div className={styles.backgroundCheckLast}>
                Hourly Rate: $40.00
              </div>
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
              <div className={styles.backgroundCheckLast}>
                Lesson Cancellation: 24 Hours Notice Required
              </div>
            </div>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon2} alt="" src="/vector8.svg" />
              <div className={styles.backgroundCheckLast}>
                Background check last posted: 02/14/22
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ratings}>
        <div className={styles.ratings1}>
          <div className={styles.bio2}>Ratings</div>
          <div className={styles.reviewcoachstarGraphic}>
            <div className={styles.reviewcoachstars}>
              <img className={styles.starsIcon1} alt="" src="/stars11.svg" />
              <div className={styles.ratings3}>2,012 ratings</div>
            </div>
            <div className={styles.ratingBars}>
              <div className={styles.starParent}>
                <div className={styles.star}>5 star</div>
                <div className={styles.ratingBar}>
                  <div className={styles.ratingBarInner}>
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.div}>97%</div>
              </div>
              <div className={styles.starParent}>
                <div className={styles.star1}>4 star</div>
                <div className={styles.ratingBar}>
                  <div className={styles.ratingBarInner}>
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.div}>2%</div>
              </div>
              <div className={styles.starParent}>
                <div className={styles.star}>3 star</div>
                <div className={styles.ratingBar}>
                  <div className={styles.ratingBarInner}>
                    <div className={styles.frameInner} />
                  </div>
                </div>
                <div className={styles.div}>1%</div>
              </div>
              <div className={styles.starParent}>
                <div className={styles.star3}>2 star</div>
                <div className={styles.ratingBar3} />
                <div className={styles.div}>0%</div>
              </div>
              <div className={styles.starParent}>
                <div className={styles.star4}>1 star</div>
                <div className={styles.ratingBar3} />
                <div className={styles.div}>0%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.pageDivider} />
      </div>
      <div className={styles.reviews}>
        <div className={styles.coachRating}>
          <div className={styles.reviewcoachuserPromptWrapper}>
            <div className={styles.reviewcoachuserPrompt}>
              <div className={styles.writeReviewText}>
                <div className={styles.writeAReview}>Write a review</div>
                <div className={styles.haveYouWorked}>
                  Have you worked with Sara?
                </div>
                <div className={styles.letUsKnow}>
                  Let us know your thoughts
                </div>
              </div>
              <div className={styles.buttonlarge1}>
                <div className={styles.button1} />
                <div className={styles.buttonText}>Button</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewcoachstarGraphicsmalWrapper}>
            <div className={styles.reviewcoachstarGraphicsmal}>
              <div className={styles.reviewcoachstars1}>
                <img className={styles.starsIcon2} alt="" src="/stars4.svg" />
                <div className={styles.ratings4}>2,012 ratings</div>
              </div>
              <div className={styles.ratingBars1}>
                <div className={styles.starParent3}>
                  <div className={styles.star5}>5 star</div>
                  <div className={styles.ratingBar5}>
                    <div className={styles.ratingBarInner1}>
                      <div className={styles.frameChild1} />
                    </div>
                  </div>
                  <div className={styles.div5}>97%</div>
                </div>
                <div className={styles.starParent3}>
                  <div className={styles.star6}>4 star</div>
                  <div className={styles.ratingBar5}>
                    <div className={styles.ratingBarInner1}>
                      <div className={styles.frameChild2} />
                    </div>
                  </div>
                  <div className={styles.div5}>2%</div>
                </div>
                <div className={styles.starParent3}>
                  <div className={styles.star5}>3 star</div>
                  <div className={styles.ratingBar5}>
                    <div className={styles.ratingBarInner1}>
                      <div className={styles.frameChild3} />
                    </div>
                  </div>
                  <div className={styles.div5}>1%</div>
                </div>
                <div className={styles.starParent3}>
                  <div className={styles.star8}>2 star</div>
                  <div className={styles.ratingBar8} />
                  <div className={styles.div5}>0%</div>
                </div>
                <div className={styles.starParent3}>
                  <div className={styles.star9}>1 star</div>
                  <div className={styles.ratingBar8} />
                  <div className={styles.div5}>0%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topReviews}>
          <div className={styles.tagfilterSort}>
            <div className={styles.buttonText2}>Top Reviews</div>
            <img className={styles.vectorIcon3} alt="" src="/vector32.svg" />
          </div>
          <div className={styles.topReviews1}>Top Reviews</div>
          <div className={styles.reviewcoachreviewerFull}>
            <div className={styles.vectorParent}>
              <img
                className={styles.reviewcoachreviewerImgIcon}
                alt=""
                src="/reviewcoachreviewer-img@2x.png"
              />
              <div className={styles.reviewcoachreviewerFull}>
                <div className={styles.hoursTutoring}>Jeffrey Starfish</div>
                <img
                  className={styles.starsIcon}
                  alt=""
                  src="/reviewcoachstarssmall.svg"
                />
                <div className={styles.reviewedOnAugust}>
                  Reviewed on August 13, 2022
                </div>
              </div>
            </div>
            <div className={styles.loremIpsumDolorSitAmetConWrapper}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Augue vitae phasellus id
                tortor leo pellentesque. A rhoncus egestas penatibus nullam
                risus. Pharetra amet sodales proin orci amet sagittis pulvinar
                ultrices. Elementum vel nibh volutpat neque scelerisque a enim
                luctus massa.
              </div>
            </div>
          </div>
          <div className={styles.reviewcoachreviewerFull1}>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet consectetur. Augue vitae phasellus id
              tortor leo pellentesque. A rhoncus egestas penatibus nullam risus.
              Pharetra amet sodales proin orci amet sagittis pulvinar ultrices.
              Elementum vel nibh volutpat neque scelerisque a enim luctus massa.
            </div>
            <img
              className={styles.reviewcoachreviewerImgIcon1}
              alt=""
              src="/reviewcoachreviewer-img1@2x.png"
            />
            <div className={styles.nameSection1}>
              <div className={styles.hoursTutoring}>Jeffrey Swordfish</div>
              <img
                className={styles.starsIcon}
                alt=""
                src="/reviewcoachstarssmall1.svg"
              />
              <div className={styles.reviewedOnAugust}>
                Reviewed on August 13, 2022
              </div>
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
            <div className={styles.writeReviewText}>
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
                className={styles.vectorIcon}
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
            <div className={styles.reviewcoachuserPrompt}>
              <div className={styles.students}>Students</div>
              <div className={styles.writeReviewText}>
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
            <div className={styles.reviewcoachuserPrompt}>
              <div className={styles.students}>Coaches</div>
              <div className={styles.writeReviewText}>
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
            <div className={styles.reviewcoachuserPrompt}>
              <div className={styles.students}>Company</div>
              <div className={styles.writeReviewText}>
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
            <div className={styles.reviewcoachuserPrompt}>
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
                <div className={styles.buttonlarge2}>
                  <div className={styles.button1} />
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

export default CoachPage;
