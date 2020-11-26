import React, { useState } from "react";
import { Redirect } from "react-router";
import SearchFieldContainer from "../../../components/searchField/searchFieldContainer";
import ItemDescription from "../../../components/mainItemDetails/itemDescription";
import { setSortToReleaseDateGlobal } from "../../../search/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedAndSortedItems } from "../../../search/redux/selectors";
import TextBottomPageHead from "./textBottomPageHead";

const MainPageHeadWrapper = ({
  isPath
}) => {

  const sortToDate = useSelector(state=>state.searchedItems.sortByDate)
  const moviesCount = useSelector(state=>getSearchedAndSortedItems(state) && getSearchedAndSortedItems(state).length)
  const searchSwitch = useSelector(state=>state.searchedItems.switcher)
  const searchedValue = useSelector(state=>state.searchedItems.searchValue)

  const dispatch = useDispatch()

  const isSearch = isPath === "/search";
  const isFilm = isPath === "/film/:slug";

  const onByReleaseDateClicked = () => {
    dispatch(setSortToReleaseDateGlobal({sortdate:true, searchedValue:searchedValue}));
    
  };
  const onByRatingClicked = () => {
    dispatch(setSortToReleaseDateGlobal({sortdate:false, searchedValue:searchedValue}));
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



export default MainPageHeadWrapper;
