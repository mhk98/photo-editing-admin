import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghostMannequinPriceApi = createApi({
  reducerPath: "ghostMannequinPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["ghostMannequinPrice"], // Define the tag type
  endpoints: (build) => ({
    createghostMannequinPrice: build.mutation({
      query: (data) => ({
        url: "/ghostMannequinPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinPrice"],
    }),

    deleteghostMannequinPrice: build.mutation({
      query: (id) => ({
        url: `/ghostMannequinPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ghostMannequinPrice"],
    }),

    updateghostMannequinPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/ghostMannequinPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinPrice"],
    }),

    getAllghostMannequinPrice: build.query({
      query: () => ({
        url: "/ghostMannequinPrice",
      }),
      providesTags: ["ghostMannequinPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateghostMannequinPriceMutation,
  useGetAllghostMannequinPriceQuery,
  useDeleteghostMannequinPriceMutation,
  useUpdateghostMannequinPriceMutation,
} = ghostMannequinPriceApi;
