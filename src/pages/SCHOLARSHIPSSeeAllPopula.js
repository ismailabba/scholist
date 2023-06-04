import { useCallback } from "react";
import Footer from "../components/Footer";
import SeeMoreProgressBar from "../components/SeeMoreProgressBar";
import styles from "./SCHOLARSHIPSSeeAllPopula.module.css";
const SCHOLARSHIPSSeeAllPopula = () => {
  const onButtonmediumContainerClick = useCallback(() => {
    // Please sync "SEARCH RESULTS - Start" to the project
  }, []);

  const onPageTitleContainerClick = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  return (
    <div className={styles.scholarshipsSeeAllPopula}>
      <Footer />
      <div className={styles.sideNavscholarships}>
        <div className={styles.sideNavsectionTitle}>
          <div className={styles.sHeaderActive}>DASHBOARD</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.sideNavsectionTitle}>
          <div className={styles.sHeaderActive}>PROFILE</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.search}>
          <div className={styles.sideNavsearchBar}>
            <img
              className={styles.magnifyingGlassIcon}
              alt=""
              src="/magnifying-glass.svg"
            />
            <div className={styles.search1}>Search...</div>
          </div>
        </div>
        <div className={styles.leftMenuLinks}>
          <div className={styles.sideNavsectionLink}>
            <div className={styles.sectionLinkText}>Bookmarked</div>
          </div>
          <div className={styles.topNavtexticon}>
            <div className={styles.topNavtexticon1}>
              <div className={styles.sHeaderActive}>Scholarships</div>
              <img
                className={styles.iconBookmark}
                alt=""
                src="/icon-bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.topNavtexticon}>
          <div className={styles.topNavtexticon1}>
            <div className={styles.sHeaderActive}>Outstanding Applications</div>
            <img
              className={styles.fluenthatGraduation12RegulIcon}
              alt=""
              src="/fluenthatgraduation12regular.svg"
            />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.leftMenuLinkSection}>
          <div className={styles.sideNavsectionTitle2}>
            <div className={styles.sectionTitleAndArrow}>
              <div className={styles.sHeaderActive}>Scholarships</div>
              <img
                className={styles.rightArrowIcon}
                alt=""
                src="/right-arrow-icon1.svg"
              />
            </div>
          </div>
          <div className={styles.leftMenuLinks}>
            <div className={styles.sideNavsectionLink1}>
              <div className={styles.sectionLinkTextWrapper}>
                <div className={styles.sectionLinkText1}>My Matches</div>
              </div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>New Scholarships</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Popular</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Exclusive Deals</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Niche Scholarships</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>States</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Majors</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Easy to Apply</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>Minority Groups</div>
            </div>
            <div className={styles.sideNavsectionLink}>
              <div className={styles.sectionLinkText2}>More Scholarships</div>
            </div>
          </div>
        </div>
        <div className={styles.sideNavsectionTitle}>
          <div className={styles.sHeaderActive}>Settings</div>
        </div>
      </div>
      <div className={styles.scholarshipsAvailable}>
        1,230 scholarships available
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
      <SeeMoreProgressBar prop="24 / 1,230" />
      <div
        className={styles.buttonmedium}
        onClick={onButtonmediumContainerClick}
      >
        <img
          className={styles.arrowsIcon}
          alt=""
          src="/objects-and-tools.svg"
        />
        <div className={styles.sHeaderActive}>Search</div>
      </div>
      <div className={styles.allpageHeader}>
        <b className={styles.sortByDeadlineContainer}>Popular Scholarships</b>
      </div>
      <div className={styles.scholarshipsCards}>
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
          <div className={styles.card}>
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
        </div>
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
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
          <div className={styles.card}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
        </div>
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
          <div className={styles.card}>
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
          <div className={styles.card}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
          <div className={styles.card}>
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
          <div className={styles.card}>
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
        </div>
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
          <div className={styles.card}>
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
        </div>
        <div className={styles.row1Wrapper}>
          <div className={styles.card}>
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
          <div className={styles.card}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
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
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon1}
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
        </div>
      </div>
      <div className={styles.headertopNavprimarybreadcr}>
        <div className={styles.pageTitle} onClick={onPageTitleContainerClick}>
          <div className={styles.pageTitle1}>Scholarships</div>
          <img className={styles.underlineIcon} alt="" src="/underline.svg" />
        </div>
        <img className={styles.arrowIcon} alt="" src="/arrow211.svg" />
        <div className={styles.pageTitle2}>
          <div className={styles.pageTitle1}>Popular Scholarships</div>
          <img className={styles.underlineIcon1} alt="" />
        </div>
        <img className={styles.arrowIcon1} alt="" src="/arrow111.svg" />
        <div className={styles.pageTitle4}>
          <div className={styles.pageTitle1}>Page Title</div>
          <img className={styles.underlineIcon1} alt="" />
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.info}>
          <div className={styles.leftSideTopNav}>
            <img
              className={styles.headerlogoIcon}
              alt=""
              src="/headerlogo111.svg"
            />
            <div className={styles.topNavLeft}>
              <div className={styles.headernavLink}>
                <div className={styles.sHeaderActive}>Home</div>
              </div>
              <div className={styles.headernavLink1}>
                <div className={styles.sHeaderActive}>Scholarships</div>
              </div>
              <div className={styles.headernavLink2}>
                <div className={styles.sHeaderActive}>Services</div>
              </div>
              <div className={styles.headernavLink2}>
                <div className={styles.sHeaderActive}>{`Community `}</div>
              </div>
              <div className={styles.headernavLink2}>
                <div className={styles.sHeaderActive}>Resources</div>
              </div>
            </div>
          </div>
          <div className={styles.rightSideTopNav}>
            <img
              className={styles.messagesIcon}
              alt=""
              src="/messages111.svg"
            />
            <img
              className={styles.arrowsIcon}
              alt=""
              src="/notifications111.svg"
            />
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group111@2x.png"
              />
              <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
            </div>
            <div className={styles.buttonmedium1}>
              <div className={styles.button} />
              <div className={styles.buttonText1}>Log out</div>
            </div>
            <div className={styles.buttonmedium2}>
              <div className={styles.button1} />
              <div className={styles.buttonText1}>Dashboard</div>
            </div>
          </div>
        </div>
        <img
          className={styles.scholarshipsLineIcon}
          alt=""
          src="/scholarships-line11.svg"
        />
        <img
          className={styles.servicesLineIcon}
          alt=""
          src="/services-line11.svg"
        />
        <img
          className={styles.communityLineIcon}
          alt=""
          src="/community-line11.svg"
        />
        <img className={styles.resourcesIcon} alt="" src="/resources11.svg" />
        <div className={styles.searchBar}>
          <div className={styles.inputsDefault}>
            <div className={styles.state}>
              <div className={styles.input} />
              <div className={styles.placeholder}>Search</div>
              <img
                className={styles.searchIcon}
                alt=""
                src="/search-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filtersWrapper}>
        <div className={styles.filterButton}>
          <div className={styles.sHeaderActive}>Category</div>
          <div className={styles.circle1}>
            <img
              className={styles.vectorIcon1}
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
          <div className={styles.sHeaderActive}>Award Amount</div>
          <div className={styles.circle1}>
            <img className={styles.vectorIcon1} alt="" src="/vector3111.svg" />
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
        <div className={styles.filterButton}>
          <div className={styles.sHeaderActive}>Location</div>
          <div className={styles.circle1}>
            <img className={styles.vectorIcon1} alt="" src="/vector4111.svg" />
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
          <div className={styles.sHeaderActive}>Deadline</div>
          <div className={styles.circle1}>
            <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.chevrondownIcon}
              alt=""
              src="/chevrondown61.svg"
            />
          </div>
        </div>
        <div className={styles.filterButton}>
          <div className={styles.sHeaderActive}>Easy Apply</div>
          <div className={styles.circle1}>
            <img
              className={styles.vectorIcon1}
              alt=""
              src="/vector111111.svg"
            />
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.chevrondownIcon}
              alt=""
              src="/chevrondown7.svg"
            />
          </div>
        </div>
        <div className={styles.filterButton}>
          <div className={styles.sHeaderActive}>Date Posted</div>
          <div className={styles.circle1}>
            <img className={styles.vectorIcon1} alt="" src="/vector1211.svg" />
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.chevrondownIcon}
              alt=""
              src="/chevrondown8.svg"
            />
          </div>
        </div>
        <div className={styles.ellipseButton}>
          <img className={styles.vectorIcon7} alt="" src="/vector13.svg" />
        </div>
      </div>
    </div>
  );
};

export default SCHOLARSHIPSSeeAllPopula;
