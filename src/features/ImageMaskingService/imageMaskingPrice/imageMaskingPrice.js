import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageMaskingPriceApi = createApi({
  reducerPath: "imageMaskingPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageMaskingPrice"], // Define the tag type
  endpoints: (build) => ({
    createimageMaskingPrice: build.mutation({
      query: (data) => ({
        url: "/imageMaskingPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageMaskingPrice"],
    }),

    deleteimageMaskingPrice: build.mutation({
      query: (id) => ({
        url: `/imageMaskingPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageMaskingPrice"],
    }),

    updateimageMaskingPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageMaskingPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageMaskingPrice"],
    }),

    getAllimageMaskingPrice: build.query({
      query: () => ({
        url: "/imageMaskingPrice",
      }),
      providesTags: ["imageMaskingPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageMaskingPriceMutation,
  useGetAllimageMaskingPriceQuery,
  useDeleteimageMaskingPriceMutation,
  useUpdateimageMaskingPriceMutation,
} = imageMaskingPriceApi;
