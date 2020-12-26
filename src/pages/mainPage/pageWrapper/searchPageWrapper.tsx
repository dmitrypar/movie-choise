import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchPageContent } from "../pageContent/searchPageContent";
import { MainPageFooter } from "../pageFooter/pageFooter";
import styles from "../../../styles/main.module.scss";
import { SearchFieldContainer } from "../../../components/searchField/searchFieldContainer";
import { TextBottomPageHead } from "../pageHead/textBottomPageHead";
import {
  getSearchedAndSortedItems,
  searchedValueSelector,
  switchResultByTitleOrPerson,
  switchResultToSortByDate,
} from "../../../redux/search/selectors";
import { setSortToReleaseDateGlobal } from "../../../redux/search/actions";

export const SearchPageWrapper = () => {
  const sortToDate = useSelector(switchResultToSortByDate);
  const searchedValue = useSelector(searchedValueSelector);
  const searchedAndSortedItems = useSelector(getSearchedAndSortedItems);
  const moviesCount = searchedAndSortedItems && searchedAndSortedItems.length;
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const dispatch = useDispatch();
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
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className="pageHead">
          <div className="topPagehead">
            <div className={styles.topPageHeadBackgroundImg}>
              <div className={styles.wrapperContainer}>
                <SearchFieldContainer />
              </div>
            </div>
            <div className={styles.bottomPageHeadWrapper}>
              <div className={styles.textBottomPageHeadWrapper}>
                <TextBottomPageHead
                  sortItemSelectorByDate={sortItemSelectorByDate}
                  onByReleaseDateClicked={onByReleaseDateClicked}
                  sortItemSelectorByrating={sortItemSelectorByrating}
                  onByRatingClicked={onByRatingClicked}
                  moviesCount={moviesCount}
                  searchSwitch={searchSwitch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <SearchPageContent />
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};
