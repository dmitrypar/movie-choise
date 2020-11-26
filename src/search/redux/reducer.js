import * as actionTypes from "./types";

// initial items state
const initialItemsState = {
    switcher: true,
    searchValue: '',
    sortByDate:true,
    searchResultsByName: [],
    searchResultsByPerson: [],
  };
  
  export const itemsReducer = (state = initialItemsState, action) => {
    switch (action.type) {
      case actionTypes.SWITCH_SEARCH:
        return {
          ...state,
          switcher: action.payload,
        };
      case actionTypes.SET_SORT_BY_DATE:
        return {
          ...state,
          sortByDate: action.payload.sortdate,
          searchValue: action.payload.searchedValue
        };
      case actionTypes.REQUEST_SEARCH_RESULT:
        return {
          ...state,
          searchValue: action.payload,
        };
      case actionTypes.GET_SEARCH_RESULT_BY_NAME:
        return {
          ...state,
          searchResultsByName: action.payload,
        };
      case actionTypes.GET_SEARCH_RESULT_BY_PERSON:
        return {
          ...state,
          searchResultsByPerson: action.payload,
        };
      default:
        return state;
    }
  };