import { combineReducers } from "redux";
import { itemsReducer } from "./../search/redux/reducer";
import {currentItemReducer} from './../item/redux/reducer';

export const RootReducer = combineReducers({
  searchedItems: itemsReducer,
  currentItemStore: currentItemReducer,
});
