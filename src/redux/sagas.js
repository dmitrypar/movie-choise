import { takeEvery, put, call, take, all } from "redux-saga/effects";
import {
  GET_CURRENT_ITEM,
  GET_SIMILAR_LIST_ITEM,
  REQUEST_CURRENT_ITEM,
  SET_SORT_BY_DATE,
  GET_SEARCH_RESULT_BY_NAME,
  GET_SEARCH_RESULT_BY_PERSON,
} from "./types";
import { API } from "./../API/api";

export function* sagaWatcherItem() {
  yield takeEvery(REQUEST_CURRENT_ITEM, sagaWorkerOnItemChoesed);
}

export function* sagaWatcherSearch() {
  yield takeEvery(SET_SORT_BY_DATE, sagaWorkerOnSearch);
}

export default function* rootSaga() {
  yield all([sagaWatcherItem(), sagaWatcherSearch()]);
}

function* sagaWorkerOnItemChoesed(action) {
  const currentItem = yield API.getCurrentItem(action.payload);
  yield put({ type: GET_CURRENT_ITEM, payload: currentItem });
  const similarListItem = yield API.getSimilarListItems(action.payload);
  yield put({ type: GET_SIMILAR_LIST_ITEM, payload: similarListItem });
}

function* sagaWorkerOnSearch(action) {
  const searchedtItemsByTitle = yield API.fetchSearchedItemsByTitle(
    action.payload.searchedValue
  );

  const searchedtItemsByPerson = yield API.fetchSearchedItemsByPerson(
    action.payload.searchedValue
  );
  yield put({
    type: GET_SEARCH_RESULT_BY_NAME,
    payload: searchedtItemsByTitle,
  });
  yield put({
    type: GET_SEARCH_RESULT_BY_PERSON,
    payload: searchedtItemsByPerson,
  });
}
