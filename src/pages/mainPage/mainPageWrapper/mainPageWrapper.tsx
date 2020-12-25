import React from "react";
import { MainPageHead } from "../mainpageHead/mainPageHead";
import MainPageContent from "../mainPageContent/mainPageContent";
import { MainPageFooter } from "../mainPageFooter/mainPageFooter";
import styles from "../../../styles/main.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className="pageHead">
          <MainPageHead />
        </div>
        <div className="pageContent">
          <MainPageContent />
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};
