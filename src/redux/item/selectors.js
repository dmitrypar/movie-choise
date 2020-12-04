import { createSelector } from "reselect";

export const getItemData = (state) => {
  return state.currentItemStore.currentItem;
};

const getResultsBySimilar = (state) => {
  return state.currentItemStore.similarListItems.data;
};

const switchResultToSortByDate = (state) => {
  return state.searchedItems.sortByDate;
};

export const getItemsForSimilar = createSelector(
  getResultsBySimilar,
  (resbysimilar) => {
    return resbysimilar && resbysimilar.results;
  }
);

const sortItemsByField = (itemsToSort, fieldName) => {
  return (
    itemsToSort &&
    itemsToSort.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  );
};

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

export const getSimilarSortedItems = getSortedItems(getItemsForSimilar);
