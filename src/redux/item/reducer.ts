import { ItemLabelTypes } from "./action-types";
import * as itemActions from "./actions";
import { InferActionCreatorsTypes } from "../common-types";
import { ItemType, SimilarListItemsType } from "./types";

export type ItemState = {
  currentItemId: number;
  currentItem: ItemType | null;
  similarListItems: SimilarListItemsType | null;
};

// initial item state
const initialItemState: ItemState = {
  currentItemId: null,
  currentItem: null,
  similarListItems: null,
};
//todo типизировать экшн
export const currentItemReducer = (
  state = initialItemState,
  //action: ReturnType<InferValueTypes<typeof itemActions>>
  action: InferActionCreatorsTypes<typeof itemActions>
): ItemState => {
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
