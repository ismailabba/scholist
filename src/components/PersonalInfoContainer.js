import styles from "./PersonalInfoContainer.module.css";
const PersonalInfoContainer = ({
  onFrameButton1Click,
  onFrameButton2Click,
}) => {
  return (
    <div className={styles.selectionHeader}>
      <div className={styles.frameParent}>
        <button className={styles.personalInformationWrapper}>
          <div className={styles.personalInformation}>Personal Information</div>
        </button>
        <button
          className={styles.educationWrapper}
          onClick={onFrameButton1Click}
        >
          <div className={styles.education}>Education</div>
        </button>
        <button
          className={styles.educationWrapper}
          onClick={onFrameButton2Click}
        >
          <div className={styles.education}>Student Activities</div>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoContainer;
