import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://revallusion.onrender.com/api/v1/' }),

    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (body) => ({
                url: "user/signin",
                method: "POST",
                credentials:"include",
                body,
            })
        }),
        verifyUser: builder.mutation({
            query: (body) => ({
                url: "user/verify-user",
                method: "POST",
                credentials:"include",
                body,
            })
        })
    })
})


export const { useSigninMutation, useVerifyUserMutation } = authApi;