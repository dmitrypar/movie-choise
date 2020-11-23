import React, { useState } from "react";
import { Redirect } from "react-router";
import SearchFieldContainer from "../../../components/searchField/searchFieldContainer";
import ItemDescription from "../../../components/mainItemDetails/itemDescription";
import { setSortToReleaseDateGlobal, requestSearchedresults } from "./../../../redux/actions";
import { connect } from "react-redux";
import { getSearchedAndSortedItems } from "./../../../redux/itemSelectors";
import TextBottomPageHead from "./textBottomPageHead";

const MainPageHeadWrapper = ({
  isPath,
  setSortToReleaseDateGlobal,
  sortToDate,
  moviesCount,
  searchSwitch,
  searchedValue
}) => {
  const isSearch = isPath === "/search";
  const isFilm = isPath === "/film/:slug";
  const onByReleaseDateClicked = () => {
    setSortToReleaseDateGlobal({sortdate:true, searchedValue:searchedValue});
    
  };
  const onByRatingClicked = () => {
    setSortToReleaseDateGlobal({sortdate:false, searchedValue:searchedValue});
  };
  const sortItemSelectorByDate = sortToDate
    ? "selectedSortByReleaseDate"
    : "sortByReleaseDate";
  const sortItemSelectorByrating = sortToDate
    ? "sortByRating"
    : "selectedSortByRating";

  return (
    <div className="topPagehead">
      <div className="topPageHeadBackgroundImg">
        <div className="wrapperContainer">
          {isSearch && <SearchFieldContainer />}
          {isFilm && <ItemDescription />}
        </div>
        {isPath === "/" && <Redirect to="/search" />}
      </div>
      <div className="bottomPageHeadWrapper">
        <div className="textBottomPageHeadWrapper">
          {isSearch & (moviesCount > 0) ? (
            <TextBottomPageHead
              sortItemSelectorByDate={sortItemSelectorByDate}
              onByReleaseDateClicked={onByReleaseDateClicked}
              sortItemSelectorByrating={sortItemSelectorByrating}
              onByRatingClicked={onByRatingClicked}
              moviesCount={moviesCount}
              searchSwitch={searchSwitch}
            />
          ) : isFilm ? (
            <div className="canSee">You can see also</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  sortToDate: state.searchedItems.sortByDate,
  moviesCount:
    getSearchedAndSortedItems(state) && getSearchedAndSortedItems(state).length,
  searchSwitch: state.navigateData.switcher,
  searchedValue: state.searchedItems.searchValue
});

export default connect(mapStateToprops, { setSortToReleaseDateGlobal, requestSearchedresults })(
  MainPageHeadWrapper
);
