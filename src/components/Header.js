import { useMemo } from "react";
import styles from "./Header.module.css";
const Header = ({
  headerlogo,
  vector,
  messages,
  notifications,
  maskGroup,
  vector1,
  scholarshipsLine,
  servicesLine,
  communityLine,
  resources,
  headerlogoWidth,
  menuWidth,
  onHeadernavLinkContainer1Click,
}) => {
  const leftSideTopNavStyle = useMemo(() => {
    return {
      width: headerlogoWidth,
    };
  }, [headerlogoWidth]);

  const rightSideTopNavStyle = useMemo(() => {
    return {
      width: menuWidth,
    };
  }, [menuWidth]);

  return (
    <div className={styles.navbar}>
      <div className={styles.info}>
        <div className={styles.leftSideTopNav} style={leftSideTopNavStyle}>
          <img className={styles.headerlogoIcon} alt="" src={headerlogo} />
          <div className={styles.topNavLeft}>
            <div className={styles.headernavLink}>
              <div className={styles.navLinkDefault}>Home</div>
            </div>
            <div
              className={styles.headernavLink1}
              onClick={onHeadernavLinkContainer1Click}
            >
              <div className={styles.navLinkDefault}>Scholarships</div>
            </div>
            <div className={styles.headernavLink2}>
              <div className={styles.navLinkDefault}>Services</div>
            </div>
            <div className={styles.headernavLink2}>
              <div className={styles.navLinkDefault}>{`Community `}</div>
            </div>
            <div className={styles.headernavLink2}>
              <div className={styles.navLinkDefault}>Resources</div>
            </div>
          </div>
        </div>
        <div className={styles.rightSideTopNav} style={rightSideTopNavStyle}>
          <button className={styles.menu}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon1} alt="" src={vector} />
          </button>
          <div className={styles.messagesParent}>
            <img className={styles.messagesIcon} alt="" src={messages} />
            <img
              className={styles.notificationsIcon}
              alt=""
              src={notifications}
            />
            <div className={styles.maskGroupParent}>
              <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
              <img className={styles.vectorIcon2} alt="" src={vector1} />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.scholarshipsLineIcon}
        alt=""
        src={scholarshipsLine}
      />
      <img className={styles.servicesLineIcon} alt="" src={servicesLine} />
      <img className={styles.communityLineIcon} alt="" src={communityLine} />
      <img className={styles.resourcesIcon} alt="" src={resources} />
    </div>
  );
};

export default Header;
