import { createSelector } from "reselect";

const getSearchedResultsByName = (state) => {
  return state.searchedItems.searchResultsByName.data;
};
const getSearchedResultsByPerson = (state) => {
  return state.searchedItems.searchResultsByPerson.data;
};
const switchResultByTitleOrPerson = (state) => {
  return state.navigateData.switcher;
};

const switchResultToSortByDate = (state) => {
  return state.searchedItems.sortByDate;
};

const getResultsBySimilar = (state) => {
  return state.currentItemStore.similarListItems.data;
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

export const getItemsForSimilar = createSelector(
  getResultsBySimilar,
  (resbysimilar) => {
    return resbysimilar && resbysimilar.results;
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

export const getSimilarSortedItems = getSortedItems(getItemsForSimilar);

// export const getItemAfterSearch = (state) => {
//     const switcher = state.navigateData.switcher;
//     const searchResultsByName = state.searchedItems.searchResultsByName.data;
//     const searchResultsByPerson = state.searchedItems.searchResultsByPerson.data;

//     let generalRawSearchedResults
//     if (switcher) {
//       generalRawSearchedResults = searchResultsByName && searchResultsByName.results

//     } else {
//       generalRawSearchedResults = searchResultsByPerson &&
//       searchResultsByPerson.results.map((res) => res.known_for[0])
//     }
//     return generalRawSearchedResults
//   };
