import { SearchedItemsByNameTypes, SearchedItemsByPersonTypes } from './types';
import { AplicationType } from './../root-reducer';

import { createSelector } from "reselect";

const getSearchedResultsByName = (state: AplicationType) => {
  return state.searchedItems.searchResultsByName;
};
const getSearchedResultsByPerson = (state: AplicationType) => {
  return state.searchedItems.searchResultsByPerson;
};
const switchResultByTitleOrPerson = (state: AplicationType) => {
  return state.searchedItems.switcher;
};

const switchResultToSortByDate = (state: AplicationType) => {
  return state.searchedItems.sortByDate;
};

export const getItemsAfterSearch = createSelector(
  getSearchedResultsByName,
  getSearchedResultsByPerson,
  switchResultByTitleOrPerson,
  (resbyname: SearchedItemsByNameTypes, resbypreson: SearchedItemsByPersonTypes, switcher: boolean) => {
    let generalRawSearchedResults;
    if (switcher) {
      generalRawSearchedResults = resbyname && resbyname.results;
    } else {
      generalRawSearchedResults =
        resbypreson && resbypreson.results.map((res) => res.known_for[0]);
    }

    return generalRawSearchedResults;
  }
);

export const getSearchedAndSortedItems = 
  createSelector(
    getItemsAfterSearch,
    switchResultToSortByDate,
    (sortItem, modeByDate) => {
      let finalSortedItems;
      if (modeByDate) {
        finalSortedItems = sortItemsByField(sortItem, "release_date");
      } else {
        finalSortedItems = sortItemsByField(sortItem, "popularity");
      }
      return finalSortedItems;
    }
  );

const sortItemsByField = (itemsToSort: any[], fieldName: string) => {
  return (
    itemsToSort &&
    itemsToSort.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  );
};


