import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reflectionCreationPriceApi = createApi({
  reducerPath: "reflectionCreationPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["reflectionCreationPrice"], // Define the tag type
  endpoints: (build) => ({
    createreflectionCreationPrice: build.mutation({
      query: (data) => ({
        url: "/reflectionCreationPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationPrice"],
    }),

    deletereflectionCreationPrice: build.mutation({
      query: (id) => ({
        url: `/reflectionCreationPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reflectionCreationPrice"],
    }),

    updatereflectionCreationPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/reflectionCreationPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationPrice"],
    }),

    getAllreflectionCreationPrice: build.query({
      query: () => ({
        url: "/reflectionCreationPrice",
      }),
      providesTags: ["reflectionCreationPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatereflectionCreationPriceMutation,
  useGetAllreflectionCreationPriceQuery,
  useDeletereflectionCreationPriceMutation,
  useUpdatereflectionCreationPriceMutation,
} = reflectionCreationPriceApi;
