import axios, { AxiosPromise, AxiosResponse } from "axios";


type axiosResponse = AxiosPromise<
  {method: string
  url: string
  params: {
    api_key: string
    language: string
    page: number | null
    include_adult: boolean | null
    query: string | null
  }}
> 

export const fetchItemAndSearchData = function (
  firstPrefix: string,
  secondPrefix: string | number,
  similar: string,
  page: number | null,
  includeAdult: boolean | null,
  query: string | null
): axiosResponse {
    
  const baseURL = "https://api.themoviedb.org/3/";
  const apiKey = process.env.API_KEY;

  return axios({
    method: "get",
    url: baseURL + firstPrefix + secondPrefix + similar,
    params: {
      api_key: apiKey,
      language: "en-US",
      page: page,
      include_adult: includeAdult,
      query: query,
    },
  });
};
