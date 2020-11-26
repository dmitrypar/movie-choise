import {itemChoesedSagaWorker, onSearchSagaWorker} from './sagas';
import {
    REQUEST_CURRENT_ITEM
  } from "./../item/redux/types";

  import {
    SET_SORT_BY_DATE
  } from "./../search/redux/types"

  import { takeEvery, all } from "redux-saga/effects";


export default function* rootSaga() {
    yield all([
      takeEvery(REQUEST_CURRENT_ITEM, itemChoesedSagaWorker), 
      takeEvery(SET_SORT_BY_DATE, onSearchSagaWorker)
    ]);
  }