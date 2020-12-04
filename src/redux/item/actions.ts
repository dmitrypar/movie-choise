import { ItemType, SimilarListItemsType } from "./types";
import { ItemLabelTypes } from "./action-types";

export const onCurrentItemSelected = (itemId: string) => {
  return { type: ItemLabelTypes.REQUEST_CURRENT_ITEM, itemId };
};

export const saveCurrentItem = (item: ItemType) => {
  return { type: ItemLabelTypes.SAVE_CURRENT_ITEM, payload: item };
};

export const getSimilarListItem = (listItem: SimilarListItemsType) => {
  return { type: ItemLabelTypes.GET_SIMILAR_LIST_ITEM, payload: listItem };
};
