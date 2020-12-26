import React from "react";
import { MainPageFooter } from "../pageFooter/pageFooter";
import styles from "../../../styles/main.module.scss";
import { ItemPageContent } from "../pageContent/itemPageContent";
import { ItemDescription } from "../../../components/mainItemDetails/itemDescription/itemDescription";

export const ItemPageWrapper = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className="pageHead">
          <div className="topPagehead">
            <div className={styles.topPageHeadBackgroundImg}>
              <div className={styles.wrapperContainer}>
                <ItemDescription />
              </div>
            </div>
            <div className={styles.bottomPageHeadWrapper}>
              <div className={styles.textBottomPageHeadWrapper}>
                <div className={styles.canSee}>You can see also</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <ItemPageContent />
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};
