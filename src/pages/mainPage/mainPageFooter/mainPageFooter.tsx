import React from "react";
import { Logo } from "../../../components/logo/logo";
import styles from '../../../styles/main.module.scss'

export const MainPageFooter = () => {
  return (
    <div className={styles.mainPageFooter}>
      <div className={styles.logoFooterContainer}>
        <Logo />
      </div>
    </div>
  );
};
