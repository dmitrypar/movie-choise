import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "en-US",
  },
});



export const API = {
  fetchSearchedItemsByTitle(query: string) {
    return instance
      .get("search/movie", {
        params: {
          page: 1,
          include_adult: false,
          query,
        },
      })
     
  },

  fetchSearchedItemsByPerson(query: string) {
    return instance.get("search/person", {
      params: {
        page: 1,
        include_adult: false,
        query,
      },
    });
  },

  getCurrentItem(itemId: number) {
    return instance.get(`movie/${itemId}`);
  },

  getSimilarListItems(itemId: number) {
    return instance.get(`movie/${itemId}/similar`, {
      params: {
        page: 1,
      },
    });
  },

  getcoverImage(coverImgLink: string): string {
    return `http://image.tmdb.org/t/p/w200/${coverImgLink}`;
  },
};
