export interface Search {
  searches: SearchElement[]
}

interface SearchElement {
  q: string
  sort_by: string
  collection: string
  filter_by: string
  page?: number
  per_page?: number
  // query_by: string
  // highlight_full_fields: string
  // facet_by: string
  // max_facet_values: number
}

export interface Result {
  results: ResultElement[]
}

interface ResultElement {
  found: number
  hits: Hit[]
  out_of: number
  page: number
  // facet_counts: any[]
  // request_params: RequestParams
  // search_cutoff: boolean
  // search_time_ms: number
}

interface Hit {
  document: Nft
  // highlights: any[]
  // text_match: number
}

export interface Nft {
  collectionId: number
  collectionName: string
  collectionSlug: string
  // forSale: boolean
  // id: string
  image: string
  nftId: number
  // published: boolean
  rank: number
  rarityScore: number
  trait_archetype: string
  trait_background: string
  trait_base: string
  trait_clothing: string
  'trait_eye-accessory': string
  trait_face: string
  'trait_hand-accessory': string
  trait_head: string
  // osSharedTokenId: null
  // rawTokenId: string
  // tokenId: number
  // 'trait_traits-count': string
  // url: string
}

// interface RequestParams {
//   collection_name: string
//   per_page: number
//   q: string
// }
