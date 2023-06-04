import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = ({
  cardscholarshipsimage,
  title,
  organization,
  awardAmount,
  deadline,
  cardscholarshipsimage1,
  title1,
  organization1,
  awardAmount1,
  deadline1,
  cardscholarshipsimage2,
  title2,
  organization2,
  awardAmount2,
  deadline2,
  cardscholarshipsimage3,
  title3,
  organization3,
  awardAmount3,
  deadline3,
  propPadding,
  propHeight,
  propFlexShrink,
  propPadding1,
  propBoxSizing,
  propCursor,
  propBackgroundColor,
  propBackgroundColor1,
  propBorderRadius,
  propBackgroundColor2,
  propBackgroundColor3,
  propBorderRadius1,
  onCardClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
      flexShrink: propFlexShrink,
    };
  }, [propPadding, propHeight, propFlexShrink]);

  const row2WrapperStyle = useMemo(() => {
    return {
      padding: propPadding1,
      boxSizing: propBoxSizing,
    };
  }, [propPadding1, propBoxSizing]);

  const cardStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const cardscholarshipsbackgroundcoStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const cardscholarshipsbackgroundco1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const cardscholarshipsimageIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const cardscholarshipsbackgroundco2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const cardscholarshipsbackgroundco3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const cardscholarshipsimageIcon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  return (
    <div className={styles.row2WrapperWrapper} style={frameDivStyle}>
      <div className={styles.row2Wrapper} style={row2WrapperStyle}>
        <div className={styles.card} style={cardStyle} onClick={onCardClick}>
          <div
            className={styles.cardscholarshipsbackgroundco}
            style={cardscholarshipsbackgroundcoStyle}
          >
            <img
              className={styles.cardscholarshipsimageIcon}
              alt=""
              src={cardscholarshipsimage}
            />
          </div>
          <b className={styles.title}>{title}</b>
          <div className={styles.organization}>{organization}</div>
          <div className={styles.awardAmount}>{awardAmount}</div>
          <div className={styles.deadline}>{deadline}</div>
          <img
            className={styles.component2Icon}
            alt=""
            src="/component-21.svg"
          />
        </div>
        <div className={styles.card}>
          <div
            className={styles.cardscholarshipsbackgroundco1}
            style={cardscholarshipsbackgroundco1Style}
          >
            <img
              className={styles.cardscholarshipsimageIcon}
              alt=""
              src={cardscholarshipsimage1}
              style={cardscholarshipsimageIconStyle}
            />
          </div>
          <b className={styles.title}>{title1}</b>
          <div className={styles.organization}>{organization1}</div>
          <div className={styles.awardAmount}>{awardAmount1}</div>
          <div className={styles.deadline}>{deadline1}</div>
          <img
            className={styles.component2Icon}
            alt=""
            src="/component-21.svg"
          />
        </div>
        <div className={styles.card}>
          <div
            className={styles.cardscholarshipsbackgroundco2}
            style={cardscholarshipsbackgroundco2Style}
          >
            <img
              className={styles.cardscholarshipsimageIcon2}
              alt=""
              src={cardscholarshipsimage2}
            />
          </div>
          <b className={styles.title}>{title2}</b>
          <div className={styles.organization}>{organization2}</div>
          <div className={styles.awardAmount}>{awardAmount2}</div>
          <div className={styles.deadline}>{deadline2}</div>
          <img
            className={styles.component2Icon}
            alt=""
            src="/component-21.svg"
          />
        </div>
        <div className={styles.card}>
          <div
            className={styles.cardscholarshipsbackgroundco3}
            style={cardscholarshipsbackgroundco3Style}
          >
            <img
              className={styles.cardscholarshipsimageIcon2}
              alt=""
              src={cardscholarshipsimage3}
              style={cardscholarshipsimageIcon1Style}
            />
          </div>
          <b className={styles.title}>{title3}</b>
          <div className={styles.organization}>{organization3}</div>
          <div className={styles.awardAmount}>{awardAmount3}</div>
          <div className={styles.deadline}>{deadline3}</div>
          <img
            className={styles.component2Icon}
            alt=""
            src="/component-21.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
