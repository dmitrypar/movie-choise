export const ItemLabelTypes = {
      REQUEST_CURRENT_ITEM: 'REQUEST_CURRENT_ITEM',
      SAVE_CURRENT_ITEM: 'SAVE_CURRENT_ITEM',
      GET_SIMILAR_LIST_ITEM: 'GET_SIMILAR_LIST_ITEM'
} as const





export type ItemType = {
      data: DataTypeItem
      status:number
      statusText:string|null
      headers:{}
      config:{}
      request:{}
}

type DataTypeItem = {
      adult: boolean
      backdrop_path: string
      belongs_to_collection: {}
      budget: number|null
      genres: []
      homepage: string
      id: number
      imdb_id: string
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      production_companies: []
      production_countries: []
      release_date: string
      revenue: number
      runtime: number
      spoken_languages: []
      status: string
      tagline: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
}

export type SimilarListItemsType = {
      page: number
      results: SimilarListResultsItems
      total_pages: number
      total_results: number
}

type SimilarListResultsItems = [SimilarResultItem]

type SimilarResultItem = {
      adult: boolean
      backdrop_path: string
      genre_ids: []
      id: number
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
}

