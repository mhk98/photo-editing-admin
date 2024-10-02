import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vectorProjectsApi = createApi({
  reducerPath: "vectorProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["vectorProjects"], // Define the tag type
  endpoints: (build) => ({
    createvectorProjects: build.mutation({
      query: (data) => ({
        url: "/vectorProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vectorProjects"],
    }),

    deletevectorProjects: build.mutation({
      query: (id) => ({
        url: `/vectorProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vectorProjects"],
    }),

    updatevectorProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/vectorProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vectorProjects"],
    }),

    getAllvectorProjects: build.query({
      query: () => ({
        url: "/vectorProjects",
      }),
      providesTags: ["vectorProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatevectorProjectsMutation,
 useGetAllvectorProjectsQuery,
 useDeletevectorProjectsMutation,
 useUpdatevectorProjectsMutation

} = vectorProjectsApi;
