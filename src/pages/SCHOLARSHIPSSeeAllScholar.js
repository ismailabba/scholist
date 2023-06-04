import { useCallback } from "react";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./SCHOLARSHIPSSeeAllScholar.module.css";
const SCHOLARSHIPSSeeAllScholar = () => {
  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onCardClick = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  const onCard1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  const onCard2Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  return (
    <div className={styles.scholarshipsSeeAllScholar}>
      <Header
        headerlogo="/headerlogo21.svg"
        vector="/vector14.svg"
        messages="/messages2.svg"
        notifications="/notifications11.svg"
        maskGroup="/mask-group11@2x.png"
        vector1="/vector141.svg"
        scholarshipsLine="/scholarships-line1.svg"
        servicesLine="/services-line1.svg"
        communityLine="/community-line1.svg"
        resources="/resources1.svg"
        onHeadernavLinkContainer1Click={onHeadernavLinkContainer1Click}
      />
      <div className={styles.header}>
        <div className={styles.allpageHeader}>
          <b className={styles.dashboard}>Scholarships</b>
        </div>
      </div>
      <div className={styles.search}>
        <input
          className={styles.buttonmedium}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.filter}>
        <div className={styles.filtersWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.filterButtonParent}>
              <div className={styles.filterButton}>
                <div className={styles.buttonText}>Category</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector211111.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown6.svg"
                  />
                </div>
              </div>
              <div className={styles.filterButton}>
                <div className={styles.buttonText}>Award Amount</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector3111.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown111.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.filterButtonParent}>
              <div className={styles.filterButton}>
                <div className={styles.buttonText}>Location</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector4111.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown21.svg"
                  />
                </div>
              </div>
              <div className={styles.filterButton}>
                <div className={styles.buttonText}>Deadline</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5111.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown311.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.filterButtonContainer}>
            <FilterButton
              buttonText="Easy Apply"
              vector="/vector61.svg"
              chevrondown="/chevrondown411.svg"
            />
            <FilterButton
              buttonText="Date Posted"
              vector="/vector711.svg"
              chevrondown="/chevrondown51.svg"
            />
            <div className={styles.ellipseButton}>
              <img className={styles.vectorIcon4} alt="" src="/vector81.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scholarshipsSeeAllScholarInner}>
        <div className={styles.scholarshipsAvailableParent}>
          <div className={styles.scholarshipsAvailable}>
            785 scholarships available
          </div>
          <div className={styles.filterDropdownButton}>
            <div className={styles.filterDropdownButtonInner}>
              <div className={styles.sortByDeadlineParent}>
                <div className={styles.sortByDeadlineContainer}>
                  <span className={styles.sortBy}>{`Sort by `}</span>
                  <b>Deadline</b>
                </div>
                <img className={styles.arrowsIcon} alt="" src="/arrows11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage4@2x.png"
        title="“Be Bold” No-Essay Scholarship"
        organization="Bold.org"
        awardAmount="$25,000"
        deadline="Deadline: 04/30/2023"
        cardscholarshipsimage1="/cardscholarshipsimage11@2x.png"
        title1="$2,000 Nitro Scholarship Sweepstakes"
        organization1="Nitro"
        awardAmount1="$2,000"
        deadline1="Deadline: 12/31/2023"
        cardscholarshipsimage2="/cardscholarshipsimage21@2x.png"
        title2="$50,000 ScholarshipOwl No Essay Scholarship"
        organization2="ScholarshipOwl"
        awardAmount2="$50,000"
        deadline2="Deadline: 06/17/2023"
        cardscholarshipsimage3="/cardscholarshipsimage31@2x.png"
        title3="Coca-Cola Scholars Scholarship"
        organization3="Coca-Cola"
        awardAmount3="$20,000"
        deadline3="Deadline: 10/18/2023"
      />
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage11@2x.png"
        title="$2,000 Nitro Scholarship Sweepstakes"
        organization="Nitro"
        awardAmount="$2,000"
        deadline="Deadline: 12/31/2023"
        cardscholarshipsimage1="/cardscholarshipsimage21@2x.png"
        title1="$50,000 ScholarshipOwl No Essay Scholarship"
        organization1="ScholarshipOwl"
        awardAmount1="$50,000"
        deadline1="Deadline: 06/17/2023"
        cardscholarshipsimage2="/cardscholarshipsimage31@2x.png"
        title2="Coca-Cola Scholars Scholarship"
        organization2="Coca-Cola"
        awardAmount2="$20,000"
        deadline2="Deadline: 10/18/2023"
        cardscholarshipsimage3="/cardscholarshipsimage4@2x.png"
        title3="“Be Bold” No-Essay Scholarship"
        organization3="Bold.org"
        awardAmount3="$25,000"
        deadline3="Deadline: 04/30/2023"
        propPadding="var(--padding-lg) var(--padding-139xl)"
        propHeight="unset"
        propFlexShrink="unset"
        propPadding1="unset"
        propBoxSizing="unset"
        propCursor="pointer"
        propBackgroundColor="#00b8c3"
        propBackgroundColor1="#f8d100"
        propBorderRadius="80px"
        propBackgroundColor2="#f40000"
        propBackgroundColor3="#5d57f9"
        propBorderRadius1="unset"
        onCardClick={onCardClick}
      />
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage4@2x.png"
        title="“Be Bold” No-Essay Scholarship"
        organization="Bold.org"
        awardAmount="$25,000"
        deadline="Deadline: 04/30/2023"
        cardscholarshipsimage1="/cardscholarshipsimage11@2x.png"
        title1="$2,000 Nitro Scholarship Sweepstakes"
        organization1="Nitro"
        awardAmount1="$2,000"
        deadline1="Deadline: 12/31/2023"
        cardscholarshipsimage2="/cardscholarshipsimage21@2x.png"
        title2="$50,000 ScholarshipOwl No Essay Scholarship"
        organization2="ScholarshipOwl"
        awardAmount2="$50,000"
        deadline2="Deadline: 06/17/2023"
        cardscholarshipsimage3="/cardscholarshipsimage31@2x.png"
        title3="Coca-Cola Scholars Scholarship"
        organization3="Coca-Cola"
        awardAmount3="$20,000"
        deadline3="Deadline: 10/18/2023"
        propPadding="var(--padding-sm) var(--padding-139xl)"
        propHeight="unset"
        propFlexShrink="unset"
        propPadding1="unset"
        propBoxSizing="unset"
        propCursor="unset"
        propBackgroundColor="#5d57f9"
        propBackgroundColor1="#00b8c3"
        propBorderRadius="unset"
        propBackgroundColor2="#f8d100"
        propBackgroundColor3="#f40000"
        propBorderRadius1="80px"
      />
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage11@2x.png"
        title="$2,000 Nitro Scholarship Sweepstakes"
        organization="Nitro"
        awardAmount="$2,000"
        deadline="Deadline: 12/31/2023"
        cardscholarshipsimage1="/cardscholarshipsimage21@2x.png"
        title1="$50,000 ScholarshipOwl No Essay Scholarship"
        organization1="ScholarshipOwl"
        awardAmount1="$50,000"
        deadline1="Deadline: 06/17/2023"
        cardscholarshipsimage2="/cardscholarshipsimage31@2x.png"
        title2="Coca-Cola Scholars Scholarship"
        organization2="Coca-Cola"
        awardAmount2="$20,000"
        deadline2="Deadline: 10/18/2023"
        cardscholarshipsimage3="/cardscholarshipsimage4@2x.png"
        title3="“Be Bold” No-Essay Scholarship"
        organization3="Bold.org"
        awardAmount3="$25,000"
        deadline3="Deadline: 04/30/2023"
        propPadding="var(--padding-lg) var(--padding-139xl)"
        propHeight="unset"
        propFlexShrink="unset"
        propPadding1="unset"
        propBoxSizing="unset"
        propCursor="pointer"
        propBackgroundColor="#00b8c3"
        propBackgroundColor1="#f8d100"
        propBorderRadius="80px"
        propBackgroundColor2="#f40000"
        propBackgroundColor3="#5d57f9"
        propBorderRadius1="unset"
        onCardClick={onCard1Click}
      />
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage4@2x.png"
        title="“Be Bold” No-Essay Scholarship"
        organization="Bold.org"
        awardAmount="$25,000"
        deadline="Deadline: 04/30/2023"
        cardscholarshipsimage1="/cardscholarshipsimage11@2x.png"
        title1="$2,000 Nitro Scholarship Sweepstakes"
        organization1="Nitro"
        awardAmount1="$2,000"
        deadline1="Deadline: 12/31/2023"
        cardscholarshipsimage2="/cardscholarshipsimage21@2x.png"
        title2="$50,000 ScholarshipOwl No Essay Scholarship"
        organization2="ScholarshipOwl"
        awardAmount2="$50,000"
        deadline2="Deadline: 06/17/2023"
        cardscholarshipsimage3="/cardscholarshipsimage31@2x.png"
        title3="Coca-Cola Scholars Scholarship"
        organization3="Coca-Cola"
        awardAmount3="$20,000"
        deadline3="Deadline: 10/18/2023"
        propPadding="var(--padding-sm) var(--padding-139xl)"
        propHeight="unset"
        propFlexShrink="unset"
        propPadding1="unset"
        propBoxSizing="unset"
        propCursor="unset"
        propBackgroundColor="#5d57f9"
        propBackgroundColor1="#00b8c3"
        propBorderRadius="unset"
        propBackgroundColor2="#f8d100"
        propBackgroundColor3="#f40000"
        propBorderRadius1="80px"
      />
      <FrameComponent1
        cardscholarshipsimage="/cardscholarshipsimage11@2x.png"
        title="$2,000 Nitro Scholarship Sweepstakes"
        organization="Nitro"
        awardAmount="$2,000"
        deadline="Deadline: 12/31/2023"
        cardscholarshipsimage1="/cardscholarshipsimage21@2x.png"
        title1="$50,000 ScholarshipOwl No Essay Scholarship"
        organization1="ScholarshipOwl"
        awardAmount1="$50,000"
        deadline1="Deadline: 06/17/2023"
        cardscholarshipsimage2="/cardscholarshipsimage31@2x.png"
        title2="Coca-Cola Scholars Scholarship"
        organization2="Coca-Cola"
        awardAmount2="$20,000"
        deadline2="Deadline: 10/18/2023"
        cardscholarshipsimage3="/cardscholarshipsimage4@2x.png"
        title3="“Be Bold” No-Essay Scholarship"
        organization3="Bold.org"
        awardAmount3="$25,000"
        deadline3="Deadline: 04/30/2023"
        propPadding="var(--padding-lg) var(--padding-139xl)"
        propHeight="309px"
        propFlexShrink="0"
        propPadding1="0px 0px 109px"
        propBoxSizing="border-box"
        propCursor="pointer"
        propBackgroundColor="#00b8c3"
        propBackgroundColor1="#f8d100"
        propBorderRadius="80px"
        propBackgroundColor2="#f40000"
        propBackgroundColor3="#5d57f9"
        propBorderRadius1="unset"
        onCardClick={onCard2Click}
      />
      <div className={styles.parent}>
        <div className={styles.div4}>24 / 785</div>
        <img
          className={styles.progressBarIcon}
          alt=""
          src="/progress-bar2.svg"
        />
        <div className={styles.buttonlarge}>
          <div className={styles.button} />
          <div className={styles.buttonText4}>See more</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerGridRow}>
          <div className={styles.footerMenu}>
            <img
              className={styles.footerlogoIcon}
              alt=""
              src="/footerlogo21.svg"
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
                  <div className={styles.button1} />
                  <div className={styles.buttonText4}>Sign Up</div>
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

export default SCHOLARSHIPSSeeAllScholar;
