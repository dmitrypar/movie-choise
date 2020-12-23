import React from "react";
import { Link } from "react-router-dom";
import styles from '../../../styles/main.module.scss'

type PropsTypes = {
  onItemClickHandler: ()=> void
  coverImage: string
  itemTitle: string
  releaseData: string
  popularity: number
}

export const MainItemDetails: React.FC<PropsTypes> = ({
  onItemClickHandler,
  coverImage,
  itemTitle,
  releaseData,
  popularity,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={'coverWrapper'}>
     
          <div className={styles.itemCover} onClick={onItemClickHandler} tabIndex={-1}>
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
  );
};


