export type SearchedItemsByNameTypes = {
  page: number;
  results: SearchedResultsByNameTypes[] 
  total_pages: number;
  total_results: number;
};

export type SearchedResultsByNameTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchedItemsByPersonTypes = {
  page: number;
  results: SearchedResultsByPersonTypes[] 
  total_pages: number;
  total_results: number;
};

type SearchedResultsByPersonTypes = {
  adult: false;
  gender: number;
  id: number;
  known_for: SearchedResultsByDetailTypes[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: null | string;
};

type SearchedResultsByDetailTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SortedDataType = {
  sortdate: boolean;
  searchedValue: string;
};
