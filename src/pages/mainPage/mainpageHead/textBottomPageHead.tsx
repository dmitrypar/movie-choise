import React from "react";
import styles from '../../../styles/main.module.scss'

type PropsTypes = {
  sortItemSelectorByDate: string;
  onByReleaseDateClicked: () => void;
  sortItemSelectorByrating: string;
  onByRatingClicked: () => void;
  moviesCount: number | null;
  searchSwitch: boolean;
};

export const TextBottomPageHead: React.FC<PropsTypes> = ({
  sortItemSelectorByDate,
  onByReleaseDateClicked,
  sortItemSelectorByrating,
  onByRatingClicked,
  moviesCount,
  searchSwitch,
}) => {
  return (
    <div className={styles.textBottomPageHead}>
      <div className={styles.leftTextBottomPageHead}>
        <span className={styles.valueFoundLeftTextBottonPageHead}>{moviesCount}</span>
        <span className={'titleLeftTextBottonPageHead'}>movies found</span>
      </div>
      <div className={styles.rightTextBottomPageHead}>
        <div className={styles.sortBlock}>Sort by</div>
        <div
          className={sortItemSelectorByDate}
          onClick={onByReleaseDateClicked}
        >
          release date
        </div>
        {searchSwitch && (
          <div className={sortItemSelectorByrating} onClick={onByRatingClicked}>
            rating
          </div>
        )}
      </div>
    </div>
  );
};
