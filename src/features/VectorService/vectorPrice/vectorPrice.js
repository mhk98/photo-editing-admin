import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vectorPriceApi = createApi({
  reducerPath: "vectorPriceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["vectorPrice"], // Define the tag type
  endpoints: (build) => ({
    createvectorPrice: build.mutation({
      query: (data) => ({
        url: "/vectorPrice/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vectorPrice"],
    }),

    deletevectorPrice: build.mutation({
      query: (id) => ({
        url: `/vectorPrice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vectorPrice"],
    }),

    updatevectorPrice: build.mutation({
      query: ({ id, data }) => ({
        url: `/vectorPrice/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vectorPrice"],
    }),

    getAllvectorPrice: build.query({
      query: () => ({
        url: "/vectorPrice",
      }),
      providesTags: ["vectorPrice"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatevectorPriceMutation,
  useGetAllvectorPriceQuery,
  useDeletevectorPriceMutation,
  useUpdatevectorPriceMutation,
} = vectorPriceApi;
