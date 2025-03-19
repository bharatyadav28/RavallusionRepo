import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: "courseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/" }),

    tagTypes: ["assignment"],
    endpoints: (builder) => ({
        getSubscribedPlanCourse: builder.query({
            query: (planId) => `course/getSubscribedPlanCourse/${planId}`
        }),
        getSubscriptionDetail: builder.query({
            query: () => `order/my-subscription`
        }),
        assignmentSubmit: builder.mutation({
            query: (body) => ({
                url: "submitted-assignment",
                method: "POST",
                credentials: "include",
                body,
            }),
            invalidatesTags: (result) => [{ type: "assignment", id: "LIST" }],
        }),
        uploadFile: builder.mutation({
            query: (body) => ({
                url: "submitted-assignment/upload-answer",
                method: "POST",
                credentials: "include",
                body,
            }),
        }),
        getSubmittedAssignmet: builder.query({
            query: () => `submitted-assignment/subscribed-course-assignments`,
            providesTags: (result) =>
                result?.data?.assignments
                    ? [
                        ...result?.data?.assignments.map(({ _id }) => ({
                            type: "assignment",
                            id: _id,
                        })),
                        { type: "assignment", id: "LIST" }, // For refreshing all if needed
                    ]
                    : [{ type: "assignment", id: "LIST" }],
        }),

    }),
})

export const { useGetSubmittedAssignmetQuery, useGetSubscribedPlanCourseQuery,
    useGetSubscriptionDetailQuery, useAssignmentSubmitMutation, useUploadFileMutation } = courseApi;