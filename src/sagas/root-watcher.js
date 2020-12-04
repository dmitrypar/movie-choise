import { itemChoesedSagaWorker, onSearchSagaWorker } from "./sagas";
import { ItemLabelTypes } from "./../redux/item/action-types";
import { SearchLabelTypes } from "./../redux/search/action-types";
import { takeEvery, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    takeEvery(ItemLabelTypes.REQUEST_CURRENT_ITEM, itemChoesedSagaWorker),
    takeEvery(SearchLabelTypes.SET_SORT_BY_DATE, onSearchSagaWorker),
  ]);
}
