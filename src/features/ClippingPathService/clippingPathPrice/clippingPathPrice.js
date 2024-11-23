import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clippingPathPriceApi = createApi({
  reducerPath: "clippingPathPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["clippingPathPrice"], // Define the tag type
  endpoints: (build) => ({
    createClippingPathPrice: build.mutation({
      query: (data) => ({
        url: "/clippingPathPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clippingPathPrice"],
    }),

    deleteClippingPathPrice: build.mutation({
      query: (id) => ({
        url: `/clippingPathPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clippingPathPrice"],
    }),

    updateClippingPathPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/clippingPathPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["clippingPathPrice"],
    }),

    getAllClippingPathPrice: build.query({
      query: () => ({
        url: "/clippingPathPrice",
      }),
      providesTags: ["clippingPathPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateClippingPathPriceMutation,
  useGetAllClippingPathPriceQuery,
  useDeleteClippingPathPriceMutation,
  useUpdateClippingPathPriceMutation,
} = clippingPathPriceApi;
