import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorCorrectionPriceApi = createApi({
  reducerPath: "colorCorrectionPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["colorCorrectionPrice"], // Define the tag type
  endpoints: (build) => ({
    createcolorCorrectionPrice: build.mutation({
      query: (data) => ({
        url: "/colorCorrectionPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionPrice"],
    }),

    deletecolorCorrectionPrice: build.mutation({
      query: (id) => ({
        url: `/colorCorrectionPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorCorrectionPrice"],
    }),

    updatecolorCorrectionPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/colorCorrectionPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionPrice"],
    }),

    getAllcolorCorrectionPrice: build.query({
      query: () => ({
        url: "/colorCorrectionPrice",
      }),
      providesTags: ["colorCorrectionPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatecolorCorrectionPriceMutation,
  useGetAllcolorCorrectionPriceQuery,
  useDeletecolorCorrectionPriceMutation,
  useUpdatecolorCorrectionPriceMutation,
} = colorCorrectionPriceApi;
