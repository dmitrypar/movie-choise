import { put } from "redux-saga/effects";
import { ItemLabelTypes } from "./../redux/item/action-types";
import { SearchLabelTypes } from "./../redux/search/action-types";
import { API } from "../API/api";

export function* itemChoesedSagaWorker(action) {
  const currentItem = yield API.getCurrentItem(action.itemId);
  yield put({
    type: ItemLabelTypes.SAVE_CURRENT_ITEM,
    payload: currentItem.data,
  });
  const similarListItem = yield API.getSimilarListItems(action.itemId);
  yield put({
    type: ItemLabelTypes.GET_SIMILAR_LIST_ITEM,
    payload: similarListItem,
  });
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
