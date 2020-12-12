import axios, { AxiosPromise } from "axios";



export const fetchItemAndSearchData = function (
  urlEnd: string,
  page?: number | null,
  includeAdult?: boolean | null,
  query?: string | null
): AxiosPromise<any> {
    
  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: process.env.API_KEY,
      language: "en-US",
      page,
      include_adult: includeAdult,
      query,
    }
  })

  return instance.get(
     urlEnd
  );
};


