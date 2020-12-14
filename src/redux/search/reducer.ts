import { SearchLabelTypes } from "./action-types";
import { InferActionCreatorsTypes } from "../common-types";
import * as searchActions from "./actions";
import { SearchedItemsByNameTypes, SearchedItemsByPersonTypes } from "./types";

export type ItemsState = {
  switcher: boolean;
  searchValue: string;
  sortByDate: boolean;
  searchResultsByName: SearchedItemsByNameTypes | null;
  searchResultsByPerson: SearchedItemsByPersonTypes | null;
};

// initial items state
const initialItemsState: ItemsState = {
  switcher: true,
  searchValue: "",
  sortByDate: true,
  searchResultsByName: null,
  searchResultsByPerson: null,
};

export const itemsReducer = (
  state = initialItemsState,
  action: InferActionCreatorsTypes<typeof searchActions>
): ItemsState => {
  switch (action.type) {
    case SearchLabelTypes.SWITCH_SEARCH:
      return {
        ...state,
        switcher: action.payload,
      };
    case SearchLabelTypes.SET_SORT_BY_DATE:
      return {
        ...state,
        sortByDate: action.payload.sortdate,
        searchValue: action.payload.searchedValue,
      };
    case SearchLabelTypes.REQUEST_SEARCH_RESULT:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SearchLabelTypes.GET_SEARCH_RESULT_BY_NAME:
      return {
        ...state,
        searchResultsByName: action.payload,
      };
    case SearchLabelTypes.GET_SEARCH_RESULT_BY_PERSON:
      return {
        ...state,
        searchResultsByPerson: action.payload,
      };
    default:
      return state;
  }
};
