import React from "react";

type propTypes = {
  sortItemSelectorByDate: string;
  onByReleaseDateClicked: () => void;
  sortItemSelectorByrating: string;
  onByRatingClicked: () => void;
  moviesCount: number | null;
  searchSwitch: boolean;
};

export const TextBottomPageHead: React.FC<propTypes> = ({
  sortItemSelectorByDate,
  onByReleaseDateClicked,
  sortItemSelectorByrating,
  onByRatingClicked,
  moviesCount,
  searchSwitch,
}) => {
  return (
    <div className="textBottomPageHead">
      <div className="leftTextBottomPageHead">
        <span className="valueFoundLeftTextBottonPageHead">{moviesCount}</span>
        <span className="titleLeftTextBottonPageHead">movies found</span>
      </div>
      <div className="rightTextBottomPageHead">
        <div className="sortBlock">Sort by</div>
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
