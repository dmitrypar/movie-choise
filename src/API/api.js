import axios from "axios";

export const API = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: process.env.API_KEY,

  fetchSearchedItemsByTitle(inputSearchValue) {
    return axios.get(
      `${this.baseURL}search/movie?api_key=${
        this.apiKey
      }&language=en-US&page=1&include_adult=false&query=${
        inputSearchValue && inputSearchValue.mainSearchForm
      }`
    );
  },

  fetchSearchedItemsByPerson(inputSearchValue) {
    return axios.get(
      `${this.baseURL}search/person?api_key=${
        this.apiKey
      }&language=en-US&page=1&include_adult=false&query=${
        inputSearchValue && inputSearchValue.mainSearchForm
      }`
    );
  },

  getcoverImage(coverImgLink) {
    return `http://image.tmdb.org/t/p/w200/${coverImgLink}`;
  },

  getCurrentItem(itemId) {
    return axios.get(
      `${this.baseURL}movie/${itemId}?api_key=${this.apiKey}&language=en-US`
    );
  },

  getSimilarListItems(itemId) {
    return axios.get(
      `${this.baseURL}movie/${itemId}/similar?api_key=${this.apiKey}&language=en-US&page=1`
    );
  },
};
