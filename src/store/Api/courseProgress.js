import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const courseProgressApi = createApi({
  reducerPath: "courseProgressApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["CourseProgress", "MyCertificate"],

  endpoints: (builder) => ({
    getCourseProgress: builder.query({
      query: () => `/video-progress/your/progress`,
      providesTags: [{ type: "CourseProgress", id: "LIST" }],
    }),

    getMyCertificate: builder.query({
      query: () => `/user-certificate`,
      providesTags: [{ type: "MyCertificate", id: "LIST" }],
    }),

    generateMyCertificate: builder.mutation({
      query: (name) => ({
        url: `/user-certificate`,
        method: "POST",
        body: {
          name,
        },
        credentials: "include",
      }),
      invalidatesTags: ["MyCertificate"],
    }),
  }),
});

export const {
  useGetCourseProgressQuery,
  useGetMyCertificateQuery,
  useGenerateMyCertificateMutation,
} = courseProgressApi;
