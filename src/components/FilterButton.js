import styles from "./FilterButton.module.css";
const FilterButton = ({ buttonText, vector, chevrondown }) => {
  return (
    <div className={styles.filterButton}>
      <div className={styles.buttonText}>{buttonText}</div>
      <div className={styles.circle1}>
        <img className={styles.vectorIcon} alt="" src={vector} />
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.arrows}>
        <img className={styles.chevrondownIcon} alt="" src={chevrondown} />
      </div>
    </div>
  );
};

export default FilterButton;
