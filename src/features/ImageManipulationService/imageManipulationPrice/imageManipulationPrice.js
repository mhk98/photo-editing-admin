import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageManipulationPriceApi = createApi({
  reducerPath: "imageManipulationPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["imageManipulationPrice"], // Define the tag type
  endpoints: (build) => ({
    createimageManipulationPrice: build.mutation({
      query: (data) => ({
        url: "/imageManipulationPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageManipulationPrice"],
    }),

    deleteimageManipulationPrice: build.mutation({
      query: (id) => ({
        url: `/imageManipulationPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageManipulationPrice"],
    }),

    updateimageManipulationPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageManipulationPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageManipulationPrice"],
    }),

    getAllimageManipulationPrice: build.query({
      query: () => ({
        url: "/imageManipulationPrice",
      }),
      providesTags: ["imageManipulationPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageManipulationPriceMutation,
  useGetAllimageManipulationPriceQuery,
  useDeleteimageManipulationPriceMutation,
  useUpdateimageManipulationPriceMutation,
} = imageManipulationPriceApi;
