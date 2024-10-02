import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const automotiveApi = createApi({
  reducerPath: "automotiveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["automotive"], // Define the tag type
  endpoints: (build) => ({
    createAutomotive: build.mutation({
      query: (data) => ({
        url: "/automotive/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["automotive"],
    }),

    deleteAutomotive: build.mutation({
      query: (id) => ({
        url: `/automotive/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["automotive"],
    }),

    updateAutomotive: build.mutation({
      query: ({ id, data }) => ({
        url: `/automotive/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["automotive"],
    }),

    getAllAutomotive: build.query({
      query: () => ({
        url: "/automotive",
      }),
      providesTags: ["automotive"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateAutomotiveMutation,
  useGetAllAutomotiveQuery,
  useDeleteAutomotiveMutation,
  useUpdateAutomotiveMutation,
} = automotiveApi;
