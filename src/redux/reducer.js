import * as actionTypes from "./types";
import { combineReducers } from "redux";

// initial navigate state
const initialNavigateState = {
  switcher: true
  
};

const navReducer = (state = initialNavigateState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_SEARCH:
      return {
        ...state,
        switcher: action.payload,
      };

    default:
      return state;
  }
};

// initial items state
const initialItemsState = {
  searchValue: '',
  sortByDate:true,
  searchResultsByName: [],
  searchResultsByPerson: [],
};

const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
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

// initial item state
const initialItemState = {
  currentItemId: "",
  currentItem: [],
  similarListItems: [],
};

const currentItemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CURRENT_ITEM:
      return {
        ...state,
        currentItemId: action.payload,
      };
    case actionTypes.GET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.GET_SIMILAR_LIST_ITEM:
      return {
        ...state,
        similarListItems: action.payload,
      };
    default:
      return state;
  }
};

export const RootReducer = combineReducers({
  navigateData: navReducer,
  searchedItems: itemsReducer,
  currentItemStore: currentItemReducer,
});
