/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../../styles/main.module.scss";

type PropsTypes = {
  onItemClickHandler: () => void;
  coverImage: string;
  itemTitle: string;
  releaseData: string;
  popularity: number;
};

export const ItemDetails: React.FC<PropsTypes> = ({
  onItemClickHandler,
  coverImage,
  itemTitle,
  releaseData,
  popularity,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <div className="coverWrapper">
        <div>
          <div
            className={styles.itemCover}
            onClick={onItemClickHandler}
            tabIndex={-1}
          >
            <img className={styles.coverImage} src={coverImage} alt="" />
          </div>
        </div>
        <div className={styles.bottomItemTextWrapper}>
          <div className={styles.topLineTextItem}>
            <div className={styles.itemTitle}>{itemTitle}</div>
            <div className={styles.releaseData}>{releaseData}</div>
          </div>
          <div className={styles.popularity}>{popularity}</div>
        </div>
      </div>
    </div>
  );
};
