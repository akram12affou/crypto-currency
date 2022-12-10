import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const CoinSlice = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({baseUrl : 'https://api.coingecko.com/api/v3'}),
    endpoints : (builder) => ({
        getCoins: builder.query({
            query : (pagenum) => `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pagenum}&sparkline=true`,
        }),
        getCoin: builder.query({
            query : (id) => `https://api.coingecko.com/api/v3/coins/${id}`,
        }),
    
})
        
    })
export const {
    useGetCoinsQuery,
    useGetCoinQuery
} = CoinSlice