import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRetouchingPriceApi = createApi({
  reducerPath: "imageRetouchingPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["imageRetouchingPrice"], // Define the tag type
  endpoints: (build) => ({
    createimageRetouchingPrice: build.mutation({
      query: (data) => ({
        url: "/imageRetouchingPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingPrice"],
    }),

    deleteimageRetouchingPrice: build.mutation({
      query: (id) => ({
        url: `/imageRetouchingPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRetouchingPrice"],
    }),

    updateimageRetouchingPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRetouchingPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingPrice"],
    }),

    getAllimageRetouchingPrice: build.query({
      query: () => ({
        url: "/imageRetouchingPrice",
      }),
      providesTags: ["imageRetouchingPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRetouchingPriceMutation,
  useGetAllimageRetouchingPriceQuery,
  useDeleteimageRetouchingPriceMutation,
  useUpdateimageRetouchingPriceMutation,
} = imageRetouchingPriceApi;
