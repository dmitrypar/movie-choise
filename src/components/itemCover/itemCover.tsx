import React from "react";
import styles from "../../styles/main.module.scss";

type PropsTypes = {
  coverImage: string;
};

export const ItemCover: React.FC<PropsTypes> = ({ coverImage }) => {
  return (
    <div className={styles.itemWrapper}>
      <img className={styles.coverImage} src={coverImage} alt="" />
    </div>
  );
};
