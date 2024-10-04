import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BackgroundRemovalProjectsApi = createApi({
  reducerPath: "BackgroundRemovalProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["backgroundRemovalProjects"], // Define the tag type
  endpoints: (build) => ({
    createBackgroundRemovalProjects: build.mutation({
      query: (data) => ({
        url: "/backgroundRemovalProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalProjects"],
    }),

    deleteBackgroundRemovalProjects: build.mutation({
      query: (id) => ({
        url: `/backgroundRemovalProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["backgroundRemovalProjects"],
    }),

    updateBackgroundRemovalProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/backgroundRemovalProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalProjects"],
    }),

    getAllBackgroundRemovalProjects: build.query({
      query: () => ({
        url: "/backgroundRemovalProjects",
      }),
      providesTags: ["backgroundRemovalProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateBackgroundRemovalProjectsMutation,
  useGetAllBackgroundRemovalProjectsQuery,
  useDeleteBackgroundRemovalProjectsMutation,
  useUpdateBackgroundRemovalProjectsMutation
} = BackgroundRemovalProjectsApi;
