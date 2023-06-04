import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./SCHOLARSHIPSCATEGORYPAGE.module.css";
const SCHOLARSHIPSCATEGORYPAGE = () => {
  const navigate = useNavigate();

  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  const onSeeAllButtonClick = useCallback(() => {
    navigate("/based-on-profile");
  }, [navigate]);

  const onCardContainerClick = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  const onSeeAllContainerClick = useCallback(() => {
    navigate("/popular");
  }, [navigate]);

  const onSeeAllButton2Click = useCallback(() => {
    navigate("/popular");
  }, [navigate]);

  const onCardClick = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  const onSeeAllContainer1Click = useCallback(() => {
    navigate("/based-on-major");
  }, [navigate]);

  const onSeeAllButton4Click = useCallback(() => {
    navigate("/based-on-major");
  }, [navigate]);

  const onCard1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS DESCRIPTION1" to the project
  }, []);

  return (
    <div className={styles.scholarshipsCategoryPage}>
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
      <div className={styles.search}>
        <div className={styles.allpageHeaderParent}>
          <div className={styles.allpageHeader}>
            <b className={styles.scholarships}>Scholarships</b>
          </div>
          <input
            className={styles.buttonmedium}
            type="text"
            placeholder="Search"
          />
          <div className={styles.filters}>
            <div className={styles.filtersWrapper}>
              <div className={styles.filterButton}>
                <div className={styles.buttonText}>Category</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector11.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className={styles.filterButton1}>
                <div className={styles.circle11}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector15.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.buttonTextParent}>
                  <div className={styles.buttonText1}>Award Amount</div>
                  <div className={styles.arrows}>
                    <img
                      className={styles.chevrondownIcon}
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.filterButton2}>
                <div className={styles.circle11}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector21.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.buttonTextGroup}>
                  <div className={styles.buttonText}>Location</div>
                  <div className={styles.arrows}>
                    <img
                      className={styles.chevrondownIcon}
                      alt=""
                      src="/chevrondown2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.filterButton3}>
                <div className={styles.circle11}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector31.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.buttonTextGroup}>
                  <div className={styles.buttonText}>Deadline</div>
                  <div className={styles.arrows}>
                    <img
                      className={styles.chevrondownIcon}
                      alt=""
                      src="/chevrondown6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.filterButton4}>
                <div className={styles.buttonText}>Easy Apply</div>
                <div className={styles.circle1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector41.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.arrows}>
                  <img
                    className={styles.chevrondownIcon}
                    alt=""
                    src="/chevrondown3.svg"
                  />
                </div>
              </div>
              <div className={styles.filterButton5}>
                <div className={styles.buttonText}>Date Posted</div>
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
                    src="/chevrondown21.svg"
                  />
                </div>
              </div>
              <div className={styles.ellipseButton}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/vector51.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoryHeader}>
        <div className={styles.basedOnYourProfileParent}>
          <b className={styles.basedOnYour}>{`Based on Your Profile `}</b>
          <button className={styles.seeAllButton} onClick={onSeeAllButtonClick}>
            <div className={styles.seeAll}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward1.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.scholarshipsBody}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card} onClick={onCardContainerClick}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
        </div>
      </div>
      <div className={styles.row2WrapperWrapper}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
        </div>
      </div>
      <div className={styles.seeAll1} onClick={onSeeAllContainerClick}>
        <div className={styles.seeAllButtonWrapper}>
          <div className={styles.seeAllButton1}>
            <div className={styles.seeAll2}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.categoryHeader1}>
        <div className={styles.basedOnYourProfileParent}>
          <b className={styles.basedOnYour}>Popular</b>
          <button
            className={styles.seeAllButton}
            onClick={onSeeAllButton2Click}
          >
            <div className={styles.seeAll}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward1.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.row2WrapperContainer}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
        </div>
      </div>
      <div className={styles.row1WrapperWrapper}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card} onClick={onCardClick}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
      <div className={styles.seeAll1} onClick={onSeeAllContainer1Click}>
        <div className={styles.seeAllButtonWrapper}>
          <div className={styles.seeAllButton1}>
            <div className={styles.seeAll2}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.categoryHeader}>
        <div className={styles.basedOnYourProfileParent}>
          <b className={styles.basedOnYour}>Based on Your Major</b>
          <button
            className={styles.seeAllButton}
            onClick={onSeeAllButton4Click}
          >
            <div className={styles.seeAll}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward1.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.row2WrapperFrame}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
        </div>
      </div>
      <div className={styles.row1WrapperContainer}>
        <div className={styles.row1Wrapper1}>
          <div className={styles.card} onClick={onCard1Click}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage11@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-21.svg"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
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
          <div className={styles.card1}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
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
      <div className={styles.seeAll7}>
        <div className={styles.seeAllButtonWrapper}>
          <div className={styles.seeAllButton1}>
            <div className={styles.seeAll2}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward11.svg"
            />
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
                  <div className={styles.buttonText6}>Sign Up</div>
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

export default SCHOLARSHIPSCATEGORYPAGE;
