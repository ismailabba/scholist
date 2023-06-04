import styles from "./PopUpOverlayNitro.module.css";
const PopUpOverlayNitro = ({ onClose }) => {
  return (
    <div className={styles.popUpOverlayNitro}>
      <img className={styles.xIcon} alt="" src="/x.svg" />
      <div className={styles.text}>
        <b className={styles.beforeYouGo}>Before you go!</b>
        <div
          className={styles.youAreNow}
        >{`You are now leaving our site to apply for a scholarship on a different website. `}</div>
        <div className={styles.youAreNow}>
          Thank you for visiting us, and best of luck with your scholarship
          search!
        </div>
      </div>
      <div className={styles.buttonlarge}>
        <div className={styles.button} />
        <div className={styles.buttonText}>Continue</div>
      </div>
    </div>
  );
};

export default PopUpOverlayNitro;
