import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRestorationPriceApi = createApi({
  reducerPath: "imageRestorationPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageRestorationPrice"], // Define the tag type
  endpoints: (build) => ({
    createimageRestorationPrice: build.mutation({
      query: (data) => ({
        url: "/imageRestorationPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRestorationPrice"],
    }),

    deleteimageRestorationPrice: build.mutation({
      query: (id) => ({
        url: `/imageRestorationPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRestorationPrice"],
    }),

    updateimageRestorationPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRestorationPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRestorationPrice"],
    }),

    getAllimageRestorationPrice: build.query({
      query: () => ({
        url: "/imageRestorationPrice",
      }),
      providesTags: ["imageRestorationPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRestorationPriceMutation,
  useGetAllimageRestorationPriceQuery,
  useDeleteimageRestorationPriceMutation,
  useUpdateimageRestorationPriceMutation,
} = imageRestorationPriceApi;
