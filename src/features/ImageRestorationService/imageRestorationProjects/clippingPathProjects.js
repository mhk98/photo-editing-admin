import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRestorationProjectsApi = createApi({
  reducerPath: "imageRestorationProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["imageRestorationProjects"], // Define the tag type
  endpoints: (build) => ({
    createimageRestorationProjects: build.mutation({
      query: (data) => ({
        url: "/imageRestorationProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRestorationProjects"],
    }),

    deleteimageRestorationProjects: build.mutation({
      query: (id) => ({
        url: `/imageRestorationProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRestorationProjects"],
    }),

    updateimageRestorationProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRestorationProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRestorationProjects"],
    }),

    getAllimageRestorationProjects: build.query({
      query: () => ({
        url: "/imageRestorationProjects",
      }),
      providesTags: ["imageRestorationProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageRestorationProjectsMutation,
 useGetAllimageRestorationProjectsQuery,
 useDeleteimageRestorationProjectsMutation,
 useUpdateimageRestorationProjectsMutation

} = imageRestorationProjectsApi;
