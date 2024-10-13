import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stunningQualityApi = createApi({
  reducerPath: "stunningQualityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["stunningQuality"], // Define the tag type
  endpoints: (build) => ({
    createStunningQuality: build.mutation({
      query: (data) => ({
        url: "/stunningQuality/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["stunningQuality"],
    }),

    deleteStunningQuality: build.mutation({
      query: (id) => ({
        url: `/stunningQuality/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["stunningQuality"],
    }),

    updateStunningQuality: build.mutation({
      query: ({ id, data }) => ({
        url: `/stunningQuality/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["stunningQuality"],
    }),

    getAllStunningQuality: build.query({
      query: () => ({
        url: "/stunningQuality",
      }),
      providesTags: ["stunningQuality"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateStunningQualityMutation,
  useGetAllStunningQualityQuery,
  useDeleteStunningQualityMutation,
  useUpdateStunningQualityMutation,
} = stunningQualityApi;
