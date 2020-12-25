export type ItemType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number | null;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SimilarListItemsType = {
  page: number;
  results: SimilarResultItem[];
  total_pages: number;
  total_results: number;
};

// type SimilarListResultsItems = [SimilarResultItem]

export type SimilarResultItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type currentItemReducerTypes = {};
