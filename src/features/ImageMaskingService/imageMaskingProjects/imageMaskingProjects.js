import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageMaskingProjectsApi = createApi({
  reducerPath: "imageMaskingProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["imageMaskingProjects"], // Define the tag type
  endpoints: (build) => ({
    createimageMaskingProjects: build.mutation({
      query: (data) => ({
        url: "/imageMaskingProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageMaskingProjects"],
    }),

    deleteimageMaskingProjects: build.mutation({
      query: (id) => ({
        url: `/imageMaskingProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageMaskingProjects"],
    }),

    updateimageMaskingProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageMaskingProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageMaskingProjects"],
    }),

    getAllimageMaskingProjects: build.query({
      query: () => ({
        url: "/imageMaskingProjects",
      }),
      providesTags: ["imageMaskingProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageMaskingProjectsMutation,
 useGetAllimageMaskingProjectsQuery,
 useDeleteimageMaskingProjectsMutation,
 useUpdateimageMaskingProjectsMutation

} = imageMaskingProjectsApi;
