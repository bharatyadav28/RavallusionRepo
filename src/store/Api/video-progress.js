import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const getTags = (result) => {
  console.log("aaaaaaa", result?.data?.courseProgress[0].video);
  const allTags = [
    ...result?.data?.courseProgress?.map((courseVideo) => ({
      type: "VideoProgress",
      id: courseVideo?.video,
    })),
    { type: "VideoProgress", id: "LIST" },
  ];

  console.log("All tags", allTags);
  return allTags;
};

export const videoProgressApi = createApi({
  reducerPath: "videoProgressApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/video-progress" }),
  tagTypes: ["VideoProgress"],

  endpoints: (builder) => ({
    getCourseProgress: builder.query({
      query: (id) => `/course/${id}`,
      providesTags: [{ type: "VideoProgress", id: "LIST" }],
      // providesTags: (result, error, id) =>
      //   result ? getTags(result) : [{ type: "VideoProgress", id: "LIST" }],
    }),

    getVideoProgress: builder.query({
      query: (id) => `/${id}`,
      providesTags: (_, __, id) => {
        const individualTag = [{ type: "VideoProgress", id: id }];
        console.log("individualTag", individualTag);
        return individualTag;
      },
    }),

    updateVideoProgress: builder.mutation({
      query: ({ id, watchTime }) => ({
        url: `/${id}`,
        method: "PUT",
        credentials: "include",
        body: { watchTime },
      }),
    }),
  }),
});

export const {
  useUpdateVideoProgressMutation,
  useGetVideoProgressQuery,
  useGetCourseProgressQuery,
} = videoProgressApi;

export default videoProgressApi;
