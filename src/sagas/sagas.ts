import { requestSearchedresults, setSortToReleaseDateGlobal } from './../redux/search/actions';
import { onCurrentItemSelected } from './../redux/item/actions';
import { put } from "redux-saga/effects";
import { ItemLabelTypes } from "../redux/item/action-types";
import { SearchLabelTypes } from "../redux/search/action-types";
import { API } from "../API/api";


export function* itemChoesedSagaWorker(action: ReturnType<typeof onCurrentItemSelected> ) {
  const currentItem = yield API.getCurrentItem(action.itemId);
  yield put({
    type: ItemLabelTypes.SAVE_CURRENT_ITEM,
    payload: currentItem.data,
  });
  const similarListItem = yield API.getSimilarListItems(action.itemId);
  yield put({
    type: ItemLabelTypes.GET_SIMILAR_LIST_ITEM,
    payload: similarListItem.data,
  });
}

export function* onSearchSagaWorker(action: ReturnType<typeof requestSearchedresults>) {
  const searchedtItemsByTitle = yield API.fetchSearchedItemsByTitle(
    action.payload
  );

  const searchedtItemsByPerson = yield API.fetchSearchedItemsByPerson(
    action.payload
  );
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_NAME,
    payload: searchedtItemsByTitle.data,
  });
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_PERSON,
    payload: searchedtItemsByPerson.data,
  });
}

export function* onSortSagaWorker(action: ReturnType<typeof setSortToReleaseDateGlobal>) {
  const searchedtItemsByTitle = yield API.fetchSearchedItemsByTitle(
    action.payload.searchedValue
  );

  const searchedtItemsByPerson = yield API.fetchSearchedItemsByPerson(
    action.payload.searchedValue
  );
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_NAME,
    payload: searchedtItemsByTitle.data,
  });
  yield put({
    type: SearchLabelTypes.GET_SEARCH_RESULT_BY_PERSON,
    payload: searchedtItemsByPerson.data,
  });
}
