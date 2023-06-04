import { useMemo } from "react";
import styles from "./SeeMoreProgressBar.module.css";
const SeeMoreProgressBar = ({ prop, propLeft }) => {
  const divStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.seeMoreProgressBar}>
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
      <div className={styles.buttonlarge}>
        <div className={styles.button} />
        <div className={styles.buttonText}>See More</div>
      </div>
      <img className={styles.progressBarIcon} alt="" src="/progress-bar1.svg" />
    </div>
  );
};

export default SeeMoreProgressBar;
