import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const automotivePriceApi = createApi({
  reducerPath: "automotivePriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["automotivePrice"], // Define the tag type
  endpoints: (build) => ({
    createAutomotivePrice: build.mutation({
      query: (data) => ({
        url: "/automotivePrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["automotivePrice"],
    }),

    deleteAutomotivePrice: build.mutation({
      query: (id) => ({
        url: `/automotivePrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["automotivePrice"],
    }),

    updateAutomotivePrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/automotivePrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["automotivePrice"],
    }),

    getAllAutomotivePrice: build.query({
      query: () => ({
        url: "/automotivePrice",
      }),
      providesTags: ["automotivePrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateAutomotivePriceMutation,
  useGetAllAutomotivePriceQuery,
  useDeleteAutomotivePriceMutation,
  useUpdateAutomotivePriceMutation,
} = automotivePriceApi;
