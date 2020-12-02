import {ItemLabelTypes} from "./types";

type CurrentItem = []
type ListItems = []

export type ItemState = {
  currentItemId: string,
  currentItem: CurrentItem,
  similarListItems: ListItems,
};



// initial item state
const initialItemState: ItemState = {
    currentItemId: "",
    currentItem: [],
    similarListItems: [],
  };
  
  export const currentItemReducer = (state = initialItemState, action:any):ItemState => {
    switch (action.type) {
      case ItemLabelTypes.REQUEST_CURRENT_ITEM:
        return {
          ...state,
          currentItemId: action.itemId,
        };
      case ItemLabelTypes.SAVE_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      case ItemLabelTypes.GET_SIMILAR_LIST_ITEM:
        return {
          ...state,
          similarListItems: action.payload,
        };
      default:
        return state;
    }
  };