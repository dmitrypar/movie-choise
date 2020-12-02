import { createSelector } from "reselect";


const getSearchedResultsByName = (state) => {
  return state.searchedItems.searchResultsByName.data;
};
const getSearchedResultsByPerson = (state) => {
  return state.searchedItems.searchResultsByPerson.data;
};
const switchResultByTitleOrPerson = (state) => {
  return state.searchedItems.switcher;
};

const switchResultToSortByDate = (state) => {
  return state.searchedItems.sortByDate;
};


export const getItemsAfterSearch = createSelector(
  getSearchedResultsByName,
  getSearchedResultsByPerson,
  switchResultByTitleOrPerson,
  (resbyname, resbypreson, switcher) => {
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



export const getSortedItems = (ItemsArray) =>
  createSelector(
    ItemsArray,
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

const sortItemsByField = (itemsToSort, fieldName) => {
  return (
    itemsToSort &&
    itemsToSort.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  );
};

export const getSearchedAndSortedItems = getSortedItems(getItemsAfterSearch);




