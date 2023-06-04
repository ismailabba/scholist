import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./SCHOLARSHIPSDESCRIPTION1.module.css";
const SCHOLARSHIPSDESCRIPTION1 = () => {
  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onPageTitleContainerClick = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onPageTitleContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - See All 'Based on your Profile'" to the project
  }, []);

  const onCardContainer2Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION" to the project
  }, []);

  const onCardContainer3Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION" to the project
  }, []);

  const onCardContainer4Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION" to the project
  }, []);

  const onCardContainer5Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION" to the project
  }, []);

  const onCardContainer6Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION" to the project
  }, []);

  return (
    <div className={styles.scholarshipsDescription1}>
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
        <div className={styles.headertopNavprimarybreadcr}>
          <div className={styles.frameParent}>
            <div className={styles.pageTitleParent}>
              <div
                className={styles.pageTitle}
                onClick={onPageTitleContainerClick}
              >
                <div className={styles.pageTitle1}>Scholarships</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline.svg"
                />
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow21.svg" />
            </div>
            <div className={styles.pageTitleGroup}>
              <div
                className={styles.pageTitle2}
                onClick={onPageTitleContainer1Click}
              >
                <div className={styles.basedOnYour}>Based on Your Profile</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline1.svg"
                />
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow11.svg" />
            </div>
          </div>
          <div className={styles.pageTitle3}>
            <div className={styles.nitroScholarshipSweepstakes}>
              $2000 Nitro Scholarship Sweepstakes
            </div>
            <img className={styles.underlineIcon2} alt="" />
          </div>
        </div>
        <div className={styles.backButton}>
          <div className={styles.arrows}>
            <img
              className={styles.chevronbackwardIcon}
              alt=""
              src="/chevronbackward.svg"
            />
          </div>
          <div className={styles.back}>Back</div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.selection}>
          <div className={styles.frameGroup}>
            <div className={styles.similarScholarshipsLabelParent}>
              <div className={styles.similarScholarshipsLabel}>
                <div className={styles.back}>Based on Your Profile</div>
              </div>
              <div className={styles.card}>
                <div className={styles.card1}>
                  <div className={styles.cardscholarshipsbackgroundco}>
                    <img
                      className={styles.cardscholarshipsimageIcon}
                      alt=""
                      src="/cardscholarshipsimage21@2x.png"
                    />
                  </div>
                  <b className={styles.title}>
                    $50,000 ScholarshipOwl No Essay Scholarship
                  </b>
                  <div className={styles.organization}>ScholarshipOwl</div>
                  <div className={styles.awardAmount}>$50,000</div>
                  <div className={styles.deadline}>Deadline: 06/17/2023</div>
                  <img
                    className={styles.component2Icon}
                    alt=""
                    src="/component-21.svg"
                  />
                </div>
                <div className={styles.cardscholarshipsbackgroundco1}>
                  <img
                    className={styles.cardscholarshipsimageIcon1}
                    alt=""
                    src="/cardscholarshipsimage11@2x.png"
                  />
                </div>
                <b className={styles.title}>
                  $2,000 Nitro Scholarship Sweepstakes
                </b>
                <div className={styles.organization}>Nitro</div>
                <div className={styles.awardAmount}>$2,000</div>
                <div className={styles.deadline}>Deadline: 12/31/2023</div>
                <img
                  className={styles.component2Icon}
                  alt=""
                  src="/component-21.svg"
                />
              </div>
            </div>
            <div className={styles.card2} onClick={onCardContainer2Click}>
              <div className={styles.cardscholarshipsbackgroundco2}>
                <img
                  className={styles.cardscholarshipsimageIcon1}
                  alt=""
                  src="/cardscholarshipsimage4@2x.png"
                />
              </div>
              <b className={styles.title}>“Be Bold” No-Essay Scholarship</b>
              <div className={styles.organization}>Bold.org</div>
              <div className={styles.awardAmount}>$25,000</div>
              <div className={styles.deadline}>Deadline: 04/30/2023</div>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card2} onClick={onCardContainer3Click}>
              <div className={styles.cardscholarshipsbackgroundco3}>
                <img
                  className={styles.cardscholarshipsimageIcon}
                  alt=""
                  src="/cardscholarshipsimage31@2x.png"
                />
              </div>
              <b className={styles.title}>Coca-Cola Scholars Scholarship</b>
              <div className={styles.organization}>Coca-Cola</div>
              <div className={styles.awardAmount}>$20,000</div>
              <div className={styles.deadline}>Deadline: 10/18/2023</div>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card2} onClick={onCardContainer4Click}>
              <div className={styles.cardscholarshipsbackgroundco}>
                <img
                  className={styles.cardscholarshipsimageIcon}
                  alt=""
                  src="/cardscholarshipsimage21@2x.png"
                />
              </div>
              <b className={styles.title}>
                $50,000 ScholarshipOwl No Essay Scholarship
              </b>
              <div className={styles.organization}>ScholarshipOwl</div>
              <div className={styles.awardAmount}>$50,000</div>
              <div className={styles.deadline}>Deadline: 06/17/2023</div>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card2} onClick={onCardContainer5Click}>
              <div className={styles.cardscholarshipsbackgroundco3}>
                <img
                  className={styles.cardscholarshipsimageIcon}
                  alt=""
                  src="/cardscholarshipsimage31@2x.png"
                />
              </div>
              <b className={styles.title}>Coca-Cola Scholars Scholarship</b>
              <div className={styles.organization}>Coca-Cola</div>
              <div className={styles.awardAmount}>$20,000</div>
              <div className={styles.deadline}>Deadline: 10/18/2023</div>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card2} onClick={onCardContainer6Click}>
              <div className={styles.cardscholarshipsbackgroundco2}>
                <img
                  className={styles.cardscholarshipsimageIcon1}
                  alt=""
                  src="/cardscholarshipsimage4@2x.png"
                />
              </div>
              <b className={styles.title}>“Be Bold” No-Essay Scholarship</b>
              <div className={styles.organization}>Bold.org</div>
              <div className={styles.awardAmount}>$25,000</div>
              <div className={styles.deadline}>Deadline: 04/30/2023</div>
              <img
                className={styles.component2Icon}
                alt=""
                src="/component-21.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.body1}>
            <div className={styles.similarScholarshipsLabelGroup}>
              <div className={styles.similarScholarshipsLabel1}>
                <div className={styles.back}>Based on Your Profile</div>
              </div>
              <div className={styles.card7}>
                <div className={styles.card1}>
                  <div className={styles.cardscholarshipsbackgroundco}>
                    <img
                      className={styles.cardscholarshipsimageIcon}
                      alt=""
                      src="/cardscholarshipsimage21@2x.png"
                    />
                  </div>
                  <b className={styles.title}>
                    $50,000 ScholarshipOwl No Essay Scholarship
                  </b>
                  <div className={styles.organization}>ScholarshipOwl</div>
                  <div className={styles.awardAmount}>$50,000</div>
                  <div className={styles.deadline}>Deadline: 06/17/2023</div>
                  <img
                    className={styles.component2Icon}
                    alt=""
                    src="/component-21.svg"
                  />
                </div>
                <div className={styles.cardscholarshipsbackgroundco1}>
                  <img
                    className={styles.cardscholarshipsimageIcon1}
                    alt=""
                    src="/cardscholarshipsimage11@2x.png"
                  />
                </div>
                <b className={styles.title}>
                  $2,000 Nitro Scholarship Sweepstakes
                </b>
                <div className={styles.organization}>Nitro</div>
                <div className={styles.awardAmount}>$2,000</div>
                <div className={styles.deadline}>Deadline: 12/31/2023</div>
                <img
                  className={styles.component2Icon8}
                  alt=""
                  src="/component-21.svg"
                />
              </div>
            </div>
            <div className={styles.card9}>
              <div className={styles.cardscholarshipsbackgroundco2}>
                <img
                  className={styles.cardscholarshipsimageIcon1}
                  alt=""
                  src="/cardscholarshipsimage4@2x.png"
                />
              </div>
              <b className={styles.title}>“Be Bold” No-Essay Scholarship</b>
              <div className={styles.organization}>Bold.org</div>
              <div className={styles.awardAmount}>$25,000</div>
              <div className={styles.deadline}>Deadline: 04/30/2023</div>
              <img
                className={styles.component2Icon8}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card9}>
              <div className={styles.cardscholarshipsbackgroundco3}>
                <img
                  className={styles.cardscholarshipsimageIcon}
                  alt=""
                  src="/cardscholarshipsimage31@2x.png"
                />
              </div>
              <b className={styles.title}>Coca-Cola Scholars Scholarship</b>
              <div className={styles.organization}>Coca-Cola</div>
              <div className={styles.awardAmount}>$20,000</div>
              <div className={styles.deadline}>Deadline: 10/18/2023</div>
              <img
                className={styles.component2Icon8}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.card9}>
              <div className={styles.cardscholarshipsbackgroundco}>
                <img
                  className={styles.cardscholarshipsimageIcon}
                  alt=""
                  src="/cardscholarshipsimage21@2x.png"
                />
              </div>
              <b className={styles.title}>
                $50,000 ScholarshipOwl No Essay Scholarship
              </b>
              <div className={styles.organization}>ScholarshipOwl</div>
              <div className={styles.awardAmount}>$50,000</div>
              <div className={styles.deadline}>Deadline: 06/17/2023</div>
              <img
                className={styles.component2Icon8}
                alt=""
                src="/component-21.svg"
              />
            </div>
            <div className={styles.pageDivider} />
          </div>
          <div className={styles.scholarshipDescription}>
            <div className={styles.headerImage}>
              <img
                className={styles.image32Icon}
                alt=""
                src="/image-32@2x.png"
              />
            </div>
            <div className={styles.scholarshipName}>
              <div className={styles.titleShareIconsParent}>
                <div className={styles.titleShareIcons}>
                  <b className={styles.nitroScholarshipSweepstakes1}>
                    $2,000 Nitro Scholarship Sweepstakes
                  </b>
                </div>
                <div className={styles.healthParent}>
                  <img className={styles.healthIcon} alt="" src="/health.svg" />
                  <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
                </div>
              </div>
            </div>
            <div className={styles.amountDueDateWrapper}>
              <div className={styles.amountDueDate}>
                <div className={styles.nitro}>Nitro</div>
              </div>
            </div>
            <div className={styles.amountAndDeadline}>
              <div className={styles.nitro}>$2,000</div>
              <div className={styles.nitro}>Deadline: 12/31/2023</div>
            </div>
            <div className={styles.checklist}>
              <div className={styles.checklistDropdown}>
                <div className={styles.back}>Checklist</div>
                <div className={styles.arrowWrapper}>
                  <img className={styles.arrowIcon2} alt="" src="/arrow2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.checklistBody}>
              <div className={styles.essayParent}>
                <div className={styles.essay}>Essay</div>
                <div className={styles.lettersOfRecommendation}>
                  Letters of Recommendation
                </div>
                <div className={styles.transcripts}>Transcripts</div>
                <img
                  className={styles.checkmarkcirclefillIcon}
                  alt=""
                  src="/checkmarkcirclefill.svg"
                />
              </div>
            </div>
            <div className={styles.apply}>
              <div className={styles.buttons}>
                <div className={styles.buttonmedium}>
                  <div className={styles.buttonText}>Apply</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector42.svg"
                  />
                </div>
                <div className={styles.buttonmedium1}>
                  <div className={styles.button} />
                  <div className={styles.buttonText1}>Save</div>
                </div>
              </div>
            </div>
            <div className={styles.scholarshipDescription1}>
              <div className={styles.the2000NitroContainer}>
                <p className={styles.the2000Nitro}>
                  The $2,000 Nitro Scholarship Sweepstakes (the “Sweepstakes”)
                  begins at 12:00:01 AM Eastern Time (“ET”) Sunday, January 01,
                  2023 and ends at 11:59:59 PM ET on Sunday, December 31, 2023
                  (the “Sweepstakes Period”). Sponsor’s computer is the official
                  clock for this Sweepstakes. The $2,000 Nitro Scholarship
                  Sweepstakes is only open to legal residents of the 50 United
                  States, the District of Columbia and any US Territory age 17
                  or older at the time of entry, and who meet one (1) of the
                  four (4) following eligibility requirements at the time of
                  entry:
                </p>
                <ul className={styles.aParentWhoCurrentlyHasAC}>
                  <li className={styles.aParentWho}>
                    a parent who currently has a child enrolled in an accredited
                    college or university located within the United States;
                  </li>
                  <li className={styles.aParentWho}>
                    a student who is currently enrolled in an accredited college
                    or university located within the United States;
                  </li>
                  <li className={styles.aParentWho}>
                    a parent who currently has a child enrolled as a high school
                    senior located within the United States;
                  </li>
                  <li className={styles.aParentWho}>
                    a student who is currently enrolled as a high school junior
                    or senior who intends to enroll in an accredited college or
                    university located with the United States, within a year of
                    graduating high school (“Entrant”).
                  </li>
                </ul>
                <p className={styles.the2000Nitro}>
                  {`Void outside the U.S. and the US Territories and wherever prohibited by law. Click here for `}
                  <a
                    className={styles.officialRules}
                    href="https://2241837.fs1.hubspotusercontent-na1.net/hubfs/2241837/Nitro%20Scholarship/2023/FINAL%20$2%2c000%20Nitro%20Scholarship%20Sweepstakes%20Official%20Rules%2012%2023%2022.pdf"
                    target="_blank"
                  >
                    Official Rules
                  </a>
                  .* All applications submitted past the current deadline date
                  up till 11:59 PM ET will be considered for the next deadline.
                </p>
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
                  <div className={styles.button1} />
                  <div className={styles.buttonText1}>Sign Up</div>
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

export default SCHOLARSHIPSDESCRIPTION1;
