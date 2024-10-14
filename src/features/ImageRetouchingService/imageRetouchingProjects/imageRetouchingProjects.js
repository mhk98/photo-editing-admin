import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRetouchingProjectsApi = createApi({
  reducerPath: "imageRetouchingProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageRetouchingProjects"], // Define the tag type
  endpoints: (build) => ({
    createimageRetouchingProjects: build.mutation({
      query: (data) => ({
        url: "/imageRetouchingProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingProjects"],
    }),

    deleteimageRetouchingProjects: build.mutation({
      query: (id) => ({
        url: `/imageRetouchingProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRetouchingProjects"],
    }),

    updateimageRetouchingProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRetouchingProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingProjects"],
    }),

    getAllimageRetouchingProjects: build.query({
      query: () => ({
        url: "/imageRetouchingProjects",
      }),
      providesTags: ["imageRetouchingProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageRetouchingProjectsMutation,
 useGetAllimageRetouchingProjectsQuery,
 useDeleteimageRetouchingProjectsMutation,
 useUpdateimageRetouchingProjectsMutation

} = imageRetouchingProjectsApi;
