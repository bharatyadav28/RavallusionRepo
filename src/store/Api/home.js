import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),

    endpoints: (builder) => ({
        getLandingPageData: builder.query({
            query: () => `user/home`
        }),
        getStaticData: builder.query({
            query: () => `content/page`
        })
    })
})


export const { useGetLandingPageDataQuery, useGetStaticDataQuery } = homeApi;