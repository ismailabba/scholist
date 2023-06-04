import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  const onHeadernavLinkContainer1Click = useCallback(() => {
    // Please sync "SCHOLARSHIPS - CATEGORY PAGE" to the project
  }, []);

  return (
    <div className={styles.dashboard}>
      <Header
        headerlogo="/headerlogo.svg"
        vector="/vector.svg"
        messages="/messages.svg"
        notifications="/notifications.svg"
        maskGroup="/mask-group@2x.png"
        vector1="/vector1.svg"
        scholarshipsLine="/scholarships-line.svg"
        servicesLine="/services-line.svg"
        communityLine="/community-line.svg"
        resources="/resources.svg"
        headerlogoWidth="611.7px"
        menuWidth="266.13px"
        onHeadernavLinkContainer1Click={onHeadernavLinkContainer1Click}
      />
      <div className={styles.header}>
        <div className={styles.dashboard1}>
          <div className={styles.allpageHeader}>
            <b className={styles.dashboard2}>Dashboard</b>
          </div>
        </div>
        <div className={styles.welcomeBack}>
          <b className={styles.sectionText}>
            <span>{`Welcome Back `}</span>
            <span className={styles.joy}>Joy!</span>
          </b>
          <div className={styles.youHave24Container}>
            <span className={styles.youHave}>{`You have `}</span>
            <b className={styles.b}>24</b>
            <span
              className={styles.youHave}
            >{` new scholarship matches based on your profile! `}</span>
            <b className={styles.seeThemHere}>See them here.</b>
          </div>
        </div>
      </div>
      <div className={styles.calendarAndEvents}>
        <div className={styles.body}>
          <div className={styles.calendar}>
            <div className={styles.weekInReviewLabel}>
              <div className={styles.weekInReview}>Week in Review</div>
            </div>
            <div className={styles.weekInReview1}>
              <div className={styles.mondayParent}>
                <div className={styles.monday}>
                  <div className={styles.mon}>MON</div>
                  <div className={styles.th}>
                    <b className={styles.b1}>17</b>
                  </div>
                </div>
                <div className={styles.monday}>
                  <div className={styles.mon}>TUE</div>
                  <div className={styles.th}>
                    <b className={styles.b2}>18</b>
                  </div>
                  <div className={styles.event} />
                </div>
                <div className={styles.monday}>
                  <div className={styles.mon}>WED</div>
                  <div className={styles.th}>
                    <b className={styles.b1}>19</b>
                  </div>
                </div>
                <div className={styles.monday}>
                  <div className={styles.mon}>THU</div>
                  <div className={styles.th}>
                    <b className={styles.b1}>20</b>
                  </div>
                </div>
              </div>
              <div className={styles.mondayParent}>
                <div className={styles.monday}>
                  <div className={styles.mon}>FRI</div>
                  <div className={styles.nd3}>
                    <b className={styles.b1}>21</b>
                  </div>
                  <div className={styles.event1} />
                </div>
                <div className={styles.monday}>
                  <div className={styles.mon}>SAT</div>
                  <div className={styles.rd}>
                    <b className={styles.b1}>22</b>
                  </div>
                </div>
                <div className={styles.monday}>
                  <div className={styles.mon}>SUN</div>
                  <div className={styles.rd}>
                    <b className={styles.b1}>23</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.upcomingEvents}>
            <div className={styles.weekInReviewLabel}>
              <div className={styles.weekInReview}>Upcoming Events</div>
            </div>
            <div className={styles.weekInReview2}>
              <div className={styles.todayFridayApr21}>
                <div className={styles.todayFridayApr21Parent}>
                  <div className={styles.todayFridayApr}>
                    TODAY, FRIDAY, APR 21
                  </div>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.event11}>
                  <div className={styles.dotEventName}>
                    <div className={styles.event2} />
                    <div
                      className={styles.meetingWithCoach}
                    >{`Meeting with Coach Megan Tomlinson `}</div>
                  </div>
                  <div className={styles.am}>11:00 AM</div>
                </div>
              </div>
              <div className={styles.todayFridayApr21}>
                <div className={styles.todayFridayApr21Parent}>
                  <div className={styles.todayFridayApr}>
                    NEXT TUESDAY, APR 25
                  </div>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.event11}>
                  <div className={styles.dotEventName}>
                    <div className={styles.event3} />
                    <div className={styles.meetingWithCoach}>
                      Mel Klein Scholarship Deadline
                    </div>
                  </div>
                  <div className={styles.am1}>5:00 pM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scholarshipHeader}>
        <div className={styles.body1}>
          <b className={styles.savedScholarships}>Saved Scholarships</b>
          <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.savedScholarship}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage@2x.png"
              />
            </div>
            <b className={styles.title}>“Be Bold” No-Essay Scholarship</b>
            <div className={styles.organization}>Bold.org</div>
            <div className={styles.awardAmount}>$25,000</div>
            <div className={styles.deadline}>Deadline: 04/30/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage1@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
                alt=""
                src="/cardscholarshipsimage2@2x.png"
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
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
                alt=""
                src="/cardscholarshipsimage3@2x.png"
              />
            </div>
            <b className={styles.title}>Coca-Cola Scholars Scholarship</b>
            <div className={styles.organization}>Coca-Cola</div>
            <div className={styles.awardAmount}>$20,000</div>
            <div className={styles.deadline}>Deadline: 10/18/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.seeAll1}>
        <div className={styles.seeAllButtonWrapper}>
          <div className={styles.seeAllButton1}>
            <div className={styles.seeAll2}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.appliedHeader}>
        <div className={styles.body1}>
          <b className={styles.appliedScholarships}>Applied Scholarships</b>
          <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.appliedScholarship}>
        <div className={styles.row2Wrapper}>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco3}>
              <img
                className={styles.cardscholarshipsimageIcon2}
                alt=""
                src="/cardscholarshipsimage3@2x.png"
              />
            </div>
            <b className={styles.title}>Coca-Cola Scholars Scholarship</b>
            <div className={styles.organization}>Coca-Cola</div>
            <div className={styles.awardAmount}>$20,000</div>
            <div className={styles.deadline}>Deadline: 10/18/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage@2x.png"
              />
            </div>
            <b className={styles.title}>“Be Bold” No-Essay Scholarship</b>
            <div className={styles.organization}>Bold.org</div>
            <div className={styles.awardAmount}>$25,000</div>
            <div className={styles.deadline}>Deadline: 04/30/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco1}>
              <img
                className={styles.cardscholarshipsimageIcon}
                alt=""
                src="/cardscholarshipsimage1@2x.png"
              />
            </div>
            <b className={styles.title}>$2,000 Nitro Scholarship Sweepstakes</b>
            <div className={styles.organization}>Nitro</div>
            <div className={styles.awardAmount}>$2,000</div>
            <div className={styles.deadline}>Deadline: 12/31/2023</div>
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2.svg"
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardscholarshipsbackgroundco2}>
              <img
                className={styles.cardscholarshipsimageIcon2}
                alt=""
                src="/cardscholarshipsimage2@2x.png"
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
              src="/component-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.seeAll4}>
        <div className={styles.seeAllButtonWrapper}>
          <div className={styles.seeAllButton3}>
            <div className={styles.seeAll2}>See all</div>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward.svg"
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

export default Dashboard;
