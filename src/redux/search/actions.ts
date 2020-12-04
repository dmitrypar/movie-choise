import { SearchLabelTypes } from "./action-types";
import {
  SearchedItemsByNameTypes,
  SearchedItemsByPersonTypes,
  SortedDataType,
} from "./types";

export const requestSearchedresults = (searchValue: string) => {
  return { type: SearchLabelTypes.REQUEST_SEARCH_RESULT, payload: searchValue };
};

export const getSearchResultByName = (items: SearchedItemsByNameTypes) => {
  return { type: SearchLabelTypes.GET_SEARCH_RESULT_BY_NAME, payload: items };
};

export const getSearchResultByPerson = (items: SearchedItemsByPersonTypes) => {
  return { type: SearchLabelTypes.GET_SEARCH_RESULT_BY_PERSON, payload: items };
};

export const setSearchSwitch = (switcher: boolean) => {
  return { type: SearchLabelTypes.SWITCH_SEARCH, payload: switcher };
};

export const setSortToReleaseDateGlobal = ({
  sortdate,
  searchedValue,
}: SortedDataType) => {
  return {
    type: SearchLabelTypes.SET_SORT_BY_DATE,
    payload: { sortdate: sortdate, searchedValue: searchedValue },
  };
};
