import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BackgroundRemovalPriceApi = createApi({
  reducerPath: "BackgroundRemovalPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["backgroundRemovalPrice"], // Define the tag type
  endpoints: (build) => ({
    createBackgroundRemovalPrice: build.mutation({
      query: (data) => ({
        url: "/backgroundRemovalPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalPrice"],
    }),

    deleteBackgroundRemovalPrice: build.mutation({
      query: (id) => ({
        url: `/backgroundRemovalPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["backgroundRemovalPrice"],
    }),

    updateBackgroundRemovalPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/backgroundRemovalPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalPrice"],
    }),

    getAllBackgroundRemovalPrice: build.query({
      query: () => ({
        url: "/backgroundRemovalPrice",
      }),
      providesTags: ["backgroundRemovalPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateBackgroundRemovalPriceMutation,
  useGetAllBackgroundRemovalPriceQuery,
  useDeleteBackgroundRemovalPriceMutation,
  useUpdateBackgroundRemovalPriceMutation,
} = BackgroundRemovalPriceApi;
