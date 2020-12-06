import { fetchItemAndSearchData } from "./fetch-config";

type inputSearchValueType = {
  mainSearchForm: string
}

export const API = {

  fetchSearchedItemsByTitle(inputSearchValue: inputSearchValueType ): any {
    return fetchItemAndSearchData(
      "search/", "movie", "", 1, false,
      inputSearchValue && inputSearchValue.mainSearchForm
    );
  },

  fetchSearchedItemsByPerson(inputSearchValue: inputSearchValueType): any {
    return fetchItemAndSearchData(
      "search/", "person", "", 1, false,
      inputSearchValue && inputSearchValue.mainSearchForm
    );
  },

  getCurrentItem(itemId: string): any {
    return fetchItemAndSearchData(
      "movie/", itemId, "", null, null, null
      );
  },

  getSimilarListItems(itemId: string): any {
    return fetchItemAndSearchData(
      "movie/", itemId, "/similar", 1, null, null
      );
  },

  getcoverImage(coverImgLink: string): string {
    return `http://image.tmdb.org/t/p/w200/${coverImgLink}`;
  },
};
