import React from "react";
import { ItemType } from "../../../redux/item/types";
import styles from '../../../styles/main.module.scss'

type PropsTypes = {
  itemDetails: ItemType;
};

export const ItemTextDescription: React.FC<PropsTypes> = ({ itemDetails }) => {
  return (
    <div className={styles.itemTextDescription}>
      <div className={styles.titleItemBlock}>
        <div className={styles.itemDetailsTitle}>
          {itemDetails && itemDetails.title}
        </div>
        <div className={styles.popularityItem}>
          {itemDetails && itemDetails.popularity}
        </div>
      </div>
      <div className={styles.releaseDateItem}>
        {itemDetails && itemDetails.release_date}
      </div>
      <div className={styles.tagLine}>{itemDetails && itemDetails.tagline}</div>
      <div className={styles.overview}>{itemDetails && itemDetails.overview}</div>
      <div className={styles.budget}>
        {`Budget ${itemDetails && itemDetails.budget} $`}
      </div>
    </div>
  );
};
