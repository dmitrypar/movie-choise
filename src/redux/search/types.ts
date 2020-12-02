
export const SearchLabelTypes = {

    REQUEST_SEARCH_RESULT: 'REQUEST_SEARCH_RESULT',

    GET_SEARCH_RESULT_BY_NAME: 'GET_SEARCH_RESULT_BY_NAME',
    GET_SEARCH_RESULT_BY_PERSON: 'GET_SEARCH_RESULT_BY_PERSON',
    
    SWITCH_SEARCH: 'SWITCH_SEARCH',
    SET_SORT_BY_DATE:'SET_SORT_BY_DATE'
    
} as const


export type SearsedItemsByNameTypes = {
    page: number
    results: [SearsedResultsByNameTypes]
    total_pages: number
    total_results: number
}

type SearsedResultsByNameTypes = {
    adult: boolean
    backdrop_path: string
    genre_ids: []
    id: number
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type SearsedItemsByPersonTypes = {
    page: number
    results: [SearsedResultsByPersonTypes]
    total_pages: number
    total_results: number
}

type SearsedResultsByPersonTypes = {
    adult: false
    gender: number
    id: number
    known_for: [SearsedResultsByDetailTypes]
    known_for_department: string
    name: string
    popularity: number
    profile_path: null|string
}

type SearsedResultsByDetailTypes = {
    0:[SearsedResultsByInDetailTypes]
    known_for_department: string
    name: string
    popularity: number
    profile_path: null|string
}

type SearsedResultsByInDetailTypes = {
    adult: false
    backdrop_path: string
    genre_ids: []
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    title: string
    video: false
    vote_average: number
    vote_count: number
}

export type SortedDataType = {
    sortdate:boolean
    searchedValue:string
  }