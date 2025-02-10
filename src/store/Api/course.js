import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi ({
    reducerPath:"courseApi",
    baseQuery:fetchBaseQuery({baseUrl:"/api/v1/"}),


    endpoints: (builder) => ({
        getSubscribedPlanCourse : builder.query({
            query:() => "course/getSubscribedPlanCourse/67852d0116a2cd819a491e6b"
        })
    }),
})

export const {useGetSubscribedPlanCourseQuery} = courseApi;