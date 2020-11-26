import * as actionTypes from "./types.js";

// initial item state
const initialItemState = {
    currentItemId: "",
    currentItem: [],
    similarListItems: [],
  };
  
  export const currentItemReducer = (state = initialItemState, action) => {
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