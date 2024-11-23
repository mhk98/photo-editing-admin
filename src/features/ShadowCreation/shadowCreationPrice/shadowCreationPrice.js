import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shadowCreationPriceApi = createApi({
  reducerPath: "shadowCreationPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["shadowCreationPrice"], // Define the tag type
  endpoints: (build) => ({
    createshadowCreationPrice: build.mutation({
      query: (data) => ({
        url: "/shadowCreationPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shadowCreationPrice"],
    }),

    deleteshadowCreationPrice: build.mutation({
      query: (id) => ({
        url: `/shadowCreationPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shadowCreationPrice"],
    }),

    updateshadowCreationPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/shadowCreationPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["shadowCreationPrice"],
    }),

    getAllshadowCreationPrice: build.query({
      query: () => ({
        url: "/shadowCreationPrice",
      }),
      providesTags: ["shadowCreationPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateshadowCreationPriceMutation,
  useGetAllshadowCreationPriceQuery,
  useDeleteshadowCreationPriceMutation,
  useUpdateshadowCreationPriceMutation,
} = shadowCreationPriceApi;
