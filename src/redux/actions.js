import * as actionTypes from "./types";

export const requestSearchedresults = (searchValue) => {
   return { type: actionTypes.REQUEST_SEARCH_RESULT, payload: searchValue };
 };

export const getSearchResultByName = (items) => {
  return { type: actionTypes.GET_SEARCH_RESULT_BY_NAME, payload: items };
};

export const getSearchResultByPerson = (items) => {
   return { type: actionTypes.GET_SEARCH_RESULT_BY_PERSON, payload: items };
 };

export const setSearchSwitch = (switcher) => {
  return { type: actionTypes.SWITCH_SEARCH, payload: switcher };
};

export const onCurrentItemSelected = (itemId) => {
   return { type: actionTypes.REQUEST_CURRENT_ITEM, payload: itemId };
};

export const getCurrentItem = (item) => {
   return { type: actionTypes.GET_CURRENT_ITEM, payload: item };
};

export const getSimilarListItem = (listItem) => {
   return { type: actionTypes.GET_SIMILAR_LIST_ITEM, payload: listItem };
};

export const setSortToReleaseDateGlobal = ({sortdate, searchedValue}) => {
   return { type: actionTypes.SET_SORT_BY_DATE, payload: {sortdate:sortdate, searchedValue:searchedValue} };
};

