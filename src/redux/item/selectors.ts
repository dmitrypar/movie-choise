import { AplicationType } from "./../root-reducer";
import { SimilarListItemsType } from "./types";
import { createSelector } from "reselect";
import { SimilarResultItem } from "./types";

export const getItemData = (state: AplicationType) => {
  return state.currentItemStore.currentItem;
};

const getResultsBySimilar = (state: AplicationType) => {
  return state.currentItemStore.similarListItems;
};

const switchResultToSortByDate = (state: AplicationType) => {
  return state.searchedItems.sortByDate;
};

export const getItemsForSimilar = createSelector(
  getResultsBySimilar,
  (resbysimilar: SimilarListItemsType) => {
    return resbysimilar && resbysimilar.results;
  }
);

export const getSimilarSortedItems = createSelector<
  AplicationType,
  ReturnType<typeof getItemsForSimilar>,
  boolean,
  Array<SimilarResultItem>
>(
  getItemsForSimilar,
  switchResultToSortByDate,
  (sortItem, modeByDate): Array<SimilarResultItem> => {
    let finalSortedItems;
    if (modeByDate) {
      finalSortedItems = sortItemsByField(sortItem, "release_date");
    } else {
      finalSortedItems = sortItemsByField(sortItem, "popularity");
    }
    return finalSortedItems;
  }
);

const sortItemsByField = (itemsToSort: Array<any>, fieldName: string) => {
  return (
    itemsToSort &&
    itemsToSort.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  );
};
