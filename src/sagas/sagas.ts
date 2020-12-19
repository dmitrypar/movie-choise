import { handleErrors } from "./../components/error-boundry/error-service";
import {
  SearchedItemsByNameTypes,
  SearchedItemsByPersonTypes,
} from "./../redux/search/types";
import { AxiosResponseType } from "./../redux/common-types";
import { ItemType, SimilarListItemsType } from "./../redux/item/types";
import {
  requestSearchedresults,
  setSortToReleaseDateGlobal,
  getSearchResultByName,
  getSearchResultByPerson,
} from "./../redux/search/actions";
import {
  onCurrentItemSelected,
  saveCurrentItem,
  getSimilarListItem,
} from "./../redux/item/actions";
import { call, put } from "redux-saga/effects";
import { API } from "../API/api";

export function* onItemChoeseSagaWorker(
  action: ReturnType<typeof onCurrentItemSelected>
) {
  try {
    const currentItem: AxiosResponseType<ItemType> = yield call(
      API.getCurrentItem,
      action.itemId
    );
    yield put(saveCurrentItem(currentItem.data));

    const similarListItem: AxiosResponseType<SimilarListItemsType> = yield call(
      API.getSimilarListItems,
      action.itemId
    );
    yield put(getSimilarListItem(similarListItem.data));
  } catch (error) {
    handleErrors(error);
  }
}

export function* onSearchSagaWorker(
  action: ReturnType<typeof requestSearchedresults>
) {
  try {
    const searchedtItemsByTitle: AxiosResponseType<SearchedItemsByNameTypes> = yield call(
      API.fetchSearchedItemsByTitle,
      action.payload
    );

    const searchedtItemsByPerson: AxiosResponseType<SearchedItemsByPersonTypes> = yield call(
      API.fetchSearchedItemsByPerson,
      action.payload
    );
    yield put(getSearchResultByName(searchedtItemsByTitle.data));
    yield put(getSearchResultByPerson(searchedtItemsByPerson.data));
  } catch (error) {
    handleErrors(error);
  }
}

export function* onSortSagaWorker(
  action: ReturnType<typeof setSortToReleaseDateGlobal>
) {
  try {
    const searchedtItemsByTitle: AxiosResponseType<SearchedItemsByNameTypes> = yield call(
      API.fetchSearchedItemsByTitle,
      action.payload.searchedValue
    );

    const searchedtItemsByPerson: AxiosResponseType<SearchedItemsByPersonTypes> = yield call(
      API.fetchSearchedItemsByPerson,
      action.payload.searchedValue
    );

    yield put(getSearchResultByName(searchedtItemsByTitle.data));
    yield put(getSearchResultByPerson(searchedtItemsByPerson.data));
  } catch (error) {
    handleErrors(error);
  }
}
