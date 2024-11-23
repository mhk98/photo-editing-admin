import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AutomotiveProjectsApi = createApi({
  reducerPath: "AutomotiveProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["automotiveProjects"], // Define the tag type
  endpoints: (build) => ({
    createAutomotiveProjects: build.mutation({
      query: (data) => ({
        url: "/automotiveProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["automotiveProjects"],
    }),

    deleteAutomotiveProjects: build.mutation({
      query: (id) => ({
        url: `/automotiveProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["automotiveProjects"],
    }),

    updateAutomotiveProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/automotiveProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["automotiveProjects"],
    }),

    getAllAutomotiveProjects: build.query({
      query: () => ({
        url: "/automotiveProjects",
      }),
      providesTags: ["automotiveProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateAutomotiveProjectsMutation,
 useGetAllAutomotiveProjectsQuery,
 useDeleteAutomotiveProjectsMutation,
 useUpdateAutomotiveProjectsMutation

} = AutomotiveProjectsApi;
