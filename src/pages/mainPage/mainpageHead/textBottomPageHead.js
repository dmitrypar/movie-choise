import React from "react";

export const TextBottomPageHead = ({
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
