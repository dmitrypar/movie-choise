import {  put } from "redux-saga/effects";
import {ItemLabelTypes} from "./../redux/item/types";
import {SearchLabelTypes} from './../redux/search/types'
import {
  SAVE_CURRENT_ITEM,
  GET_SIMILAR_LIST_ITEM,
} from "../redux/item/types";
import {
  GET_SEARCH_RESULT_BY_NAME,
  GET_SEARCH_RESULT_BY_PERSON,
} from "../redux/search/types"
import { API } from "../API/api";

export function* itemChoesedSagaWorker(action) {
  const currentItem = yield API.getCurrentItem(action.itemId);
  yield put({ type: ItemLabelTypes.SAVE_CURRENT_ITEM, payload: currentItem });
  const similarListItem = yield API.getSimilarListItems(action.itemId);
  yield put({ type: ItemLabelTypes.GET_SIMILAR_LIST_ITEM, payload: similarListItem });
}

export function* onSearchSagaWorker(action) {
  const searchedtItemsByTitle = yield API.fetchSearchedItemsByTitle(
    action.payload.searchedValue
  );

  const searchedtItemsByPerson = yield API.fetchSearchedItemsByPerson(
    action.payload.searchedValue
  );
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_NAME,
    payload: searchedtItemsByTitle,
  });
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_PERSON,
    payload: searchedtItemsByPerson,
  });
}
