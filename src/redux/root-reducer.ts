import { combineReducers } from "redux";
import { itemsReducer, ItemsState } from "./search/reducer";
import { currentItemReducer, ItemState } from "./item/reducer";

export type AplicationType = {
  searchedItems: ItemsState;
  currentItemStore: ItemState;
};

export const RootReducer = combineReducers<AplicationType>({
  searchedItems: itemsReducer,
  currentItemStore: currentItemReducer,
});
