import { onItemChoeseSagaWorker, onSearchSagaWorker, onSortSagaWorker } from "./sagas";
import { ItemLabelTypes } from "../redux/item/action-types";
import { SearchLabelTypes } from "../redux/search/action-types";
import { takeEvery, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    takeEvery(ItemLabelTypes.REQUEST_CURRENT_ITEM, onItemChoeseSagaWorker),
    takeEvery(SearchLabelTypes.REQUEST_SEARCH_RESULT, onSearchSagaWorker),
    takeEvery(SearchLabelTypes.SET_SORT_BY_DATE, onSortSagaWorker),
  ]);
}
