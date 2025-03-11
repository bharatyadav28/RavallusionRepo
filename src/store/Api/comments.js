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
        createReply: builder.mutation({
            query: ({ body, commentId }) => ({
                url: `comment/${commentId}/reply`,
                method: "PUT",
                body,
            }),
            invalidatesTags: (_, __, { commentId }) => [{ type: "comments", id: commentId }]
        }),
    }),
})

export const {useCreateReplyMutation, useGetVideoCommentsQuery, useCreateCommentMutation } = commentsApi;