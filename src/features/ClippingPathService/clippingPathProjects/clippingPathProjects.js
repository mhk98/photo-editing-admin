import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clippingPathProjectsApi = createApi({
  reducerPath: "clippingPathProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["clippingPathProjects"], // Define the tag type
  endpoints: (build) => ({
    createClippingPathProjects: build.mutation({
      query: (data) => ({
        url: "/clippingPathProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clippingPathProjects"],
    }),

    deleteClippingPathProjects: build.mutation({
      query: (id) => ({
        url: `/clippingPathProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clippingPathProjects"],
    }),

    updateClippingPathProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/clippingPathProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["clippingPathProjects"],
    }),

    getAllClippingPathProjects: build.query({
      query: () => ({
        url: "/clippingPathProjects",
      }),
      providesTags: ["clippingPathProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateClippingPathProjectsMutation,
 useGetAllClippingPathProjectsQuery,
 useDeleteClippingPathProjectsMutation,
 useUpdateClippingPathProjectsMutation

} = clippingPathProjectsApi;
