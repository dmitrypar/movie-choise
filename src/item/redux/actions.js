import * as actionTypes from "./types.js";



export const onCurrentItemSelected = (itemId) => {
   return { type: actionTypes.REQUEST_CURRENT_ITEM, payload: itemId };
};

export const getCurrentItem = (item) => {
   return { type: actionTypes.GET_CURRENT_ITEM, payload: item };
};

export const getSimilarListItem = (listItem) => {
   return { type: actionTypes.GET_SIMILAR_LIST_ITEM, payload: listItem };
};



