import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/" }),

    tagTypes: ["comments"],
    endpoints: (builder) => ({
        getVideoComments: builder.query({
            query: (videoId) => `comment/video/${videoId}`,
            providesTags: (_, __, videoId) => [{ type: "comments", id: videoId }],
        }),
        createComment: builder.mutation({
            query: ({ body, videoId }) => ({
                url: `comment/video/${videoId}`,
                method: "POST",
                body,
            }),
            invalidatesTags: (_, __, { videoId }) => [{ type: "comments", id: videoId }]
        }),
    }),
})

export const { useGetVideoCommentsQuery, useCreateCommentMutation } = commentsApi;