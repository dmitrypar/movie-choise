import React, { useState } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { SearchFieldContainer } from "../../../components/searchField/searchFieldContainer";
import { ItemDescription } from "../../../components/mainItemDetails/itemDescription/itemDescription";
import { setSortToReleaseDateGlobal } from "../../../redux/search/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchedAndSortedItems,
  switchResultByTitleOrPerson,
  switchResultToSortByDate,
  searchedValueSelector,
} from "../../../redux/search/selectors";
import { TextBottomPageHead } from "./textBottomPageHead";
import {withRouter} from 'react-router-dom'
import styles from '../../../styles/main.module.scss'

type PropsTypes = RouteComponentProps

const MainPageHeadWrapper: React.FC<PropsTypes> = ({ match }) => {
  const sortToDate = useSelector(switchResultToSortByDate);
  const searchedAndSortedItems = useSelector(getSearchedAndSortedItems);
  const moviesCount = searchedAndSortedItems && searchedAndSortedItems.length;
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const searchedValue = useSelector(searchedValueSelector);

  const dispatch = useDispatch();

  const isSearch: boolean = match.path === "/search";
  const isFilm = match.path === "/film/:id";

  const onByReleaseDateClicked = () => {
    dispatch(setSortToReleaseDateGlobal({ sortdate: true, searchedValue }));
  };
  const onByRatingClicked = () => {
    dispatch(setSortToReleaseDateGlobal({ sortdate: false, searchedValue }));
  };
  const sortItemSelectorByDate = sortToDate
    ? styles.selectedSortByReleaseDate
    : styles.sortByReleaseDate;
  const sortItemSelectorByrating = sortToDate
    ? styles.sortByRating
    : styles.selectedSortByRating;

  return (
    <div className={'topPagehead'}>
      <div className={styles.topPageHeadBackgroundImg}>
        <div className={styles.wrapperContainer}>
          {isSearch && <SearchFieldContainer />}
          {isFilm && <ItemDescription />}
        </div>
        {match.path === "/" && <Redirect to="/search" />}
      </div>
      <div className={styles.bottomPageHeadWrapper}>
        <div className={styles.textBottomPageHeadWrapper}>
          {isSearch && moviesCount > 0 ? (
            <TextBottomPageHead
              sortItemSelectorByDate={sortItemSelectorByDate}
              onByReleaseDateClicked={onByReleaseDateClicked}
              sortItemSelectorByrating={sortItemSelectorByrating}
              onByRatingClicked={onByRatingClicked}
              moviesCount={moviesCount}
              searchSwitch={searchSwitch}
            />
          ) : isFilm ? (
            <div className={styles.canSee}>You can see also</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainPageHeadWrapper)