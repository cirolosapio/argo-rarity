import axios from 'axios'
import type { Result, Search } from '~/types'

const api = axios.create({
  baseURL: 'https://search2.raritysniper.com',
  headers: {
    'x-typesense-api-key': import.meta.env.VITE_RARITY_KEY,
  },
})

export async function searchNfts(nftIds: number[]) {
  const params: Search = {
    searches: [
      {
        q: '*',
        sort_by: 'rank:asc,nftId:asc',
        collection: 'assets_argonauts',
        filter_by: `nftId:=[${nftIds.join(',')}]`,
      },
    ],
  }
  const { data } = await api.post<Result>('multi_search', params)
  return data.results[0].hits.map(({ document }) => document)
}

