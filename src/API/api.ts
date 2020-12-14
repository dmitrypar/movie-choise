import { fetchItemAndSearchData } from "./fetch-config";

export const API = {
  fetchSearchedItemsByTitle(inputSearchValue: string) {
    return fetchItemAndSearchData("search/movie", 1, false, inputSearchValue);
  },

  fetchSearchedItemsByPerson(inputSearchValue: string) {
    return fetchItemAndSearchData("search/person", 1, false, inputSearchValue);
  },

  getCurrentItem(itemId: number) {
    return fetchItemAndSearchData(`movie/${itemId}`);
  },

  getSimilarListItems(itemId: number) {
    return fetchItemAndSearchData(`movie/${itemId}/similar`, 1);
  },

  getcoverImage(coverImgLink: string): string {
    return `http://image.tmdb.org/t/p/w200/${coverImgLink}`;
  },
};
