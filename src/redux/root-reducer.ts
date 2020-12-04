import { combineReducers } from "redux";
import { itemsReducer } from "./search/reducer";
import { currentItemReducer } from "./item/reducer";
import { ItemState } from "./item/reducer";
import { ItemsState } from "./search/reducer";

type AplicationType = {
  searchedItems: ItemsState;
  currentItemStore: ItemState;
};

export const RootReducer = combineReducers<AplicationType>({
  searchedItems: itemsReducer,
  currentItemStore: currentItemReducer,
});
