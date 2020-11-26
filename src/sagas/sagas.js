import {  put } from "redux-saga/effects";
import {
  GET_CURRENT_ITEM,
  GET_SIMILAR_LIST_ITEM,
} from "./../item/redux/types";
import {
  GET_SEARCH_RESULT_BY_NAME,
  GET_SEARCH_RESULT_BY_PERSON,
} from "./../search/redux/types"
import { API } from "../API/api";

export function* itemChoesedSagaWorker(action) {
  const currentItem = yield API.getCurrentItem(action.payload);
  yield put({ type: GET_CURRENT_ITEM, payload: currentItem });
  const similarListItem = yield API.getSimilarListItems(action.payload);
  yield put({ type: GET_SIMILAR_LIST_ITEM, payload: similarListItem });
}

export function* onSearchSagaWorker(action) {
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
