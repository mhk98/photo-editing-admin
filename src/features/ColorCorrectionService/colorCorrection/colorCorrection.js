import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ColorCorrectionApi = createApi({
  reducerPath: "ColorCorrectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["colorCorrection"], // Define the tag type
  endpoints: (build) => ({
    createColorCorrection: build.mutation({
      query: (data) => ({
        url: "/colorCorrection/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorCorrection"],
    }),

    deleteColorCorrection: build.mutation({
      query: (id) => ({
        url: `/colorCorrection/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorCorrection"],
    }),

    updateColorCorrection: build.mutation({
      query: ({ id, data }) => ({
        url: `/colorCorrection/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorCorrection"],
    }),

    getAllColorCorrection: build.query({
      query: () => ({
        url: "/colorCorrection",
      }),
      providesTags: ["colorCorrection"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateColorCorrectionMutation,
  useGetAllColorCorrectionQuery,
  useDeleteColorCorrectionMutation,
  useUpdateColorCorrectionMutation,
} = ColorCorrectionApi;
