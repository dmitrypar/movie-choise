import { createSelector } from "reselect";
import {
  SearchedItemsByNameTypes,
  SearchedItemsByPersonTypes,
  SearchedResultsByNameTypes,
} from "./types";
import { AplicationType } from "../root-reducer";

export const searchedValueSelector = (state: AplicationType) => {
  return state.searchedItems.searchValue;
};

const getSearchedResultsByName = (state: AplicationType) => {
  return state.searchedItems.searchResultsByName;
};
const getSearchedResultsByPerson = (state: AplicationType) => {
  return state.searchedItems.searchResultsByPerson;
};
export const switchResultByTitleOrPerson = (state: AplicationType) => {
  return state.searchedItems.switcher;
};

export const switchResultToSortByDate = (state: AplicationType) => {
  return state.searchedItems.sortByDate;
};

export const getItemsAfterSearch = createSelector(
  getSearchedResultsByName,
  getSearchedResultsByPerson,
  switchResultByTitleOrPerson,
  (
    resbyname: SearchedItemsByNameTypes,
    resbypreson: SearchedItemsByPersonTypes,
    switcher: boolean
  ) => {
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

const sortItemsByField = (itemsToSort: any[], fieldName: string) => {
  return (
    itemsToSort &&
    itemsToSort.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  );
};

export const getSearchedAndSortedItems = createSelector<
  AplicationType,
  ReturnType<typeof getItemsAfterSearch>,
  boolean,
  SearchedResultsByNameTypes[]
>(getItemsAfterSearch, switchResultToSortByDate, (sortItem, modeByDate) => {
  let finalSortedItems;
  if (modeByDate) {
    finalSortedItems = sortItemsByField(sortItem, "release_date");
  } else {
    finalSortedItems = sortItemsByField(sortItem, "popularity");
  }
  return finalSortedItems;
});
