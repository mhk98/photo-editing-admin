import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageMaskingApi = createApi({
  reducerPath: "imageMaskingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["imageMasking"], // Define the tag type
  endpoints: (build) => ({
    createimageMasking: build.mutation({
      query: (data) => ({
        url: "/imageMasking/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageMasking"],
    }),

    deleteimageMasking: build.mutation({
      query: (id) => ({
        url: `/imageMasking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageMasking"],
    }),

    updateimageMasking: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageMasking/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageMasking"],
    }),

    getAllimageMasking: build.query({
      query: () => ({
        url: "/imageMasking",
      }),
      providesTags: ["imageMasking"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageMaskingMutation,
  useGetAllimageMaskingQuery,
  useDeleteimageMaskingMutation,
  useUpdateimageMaskingMutation,
} = imageMaskingApi;
