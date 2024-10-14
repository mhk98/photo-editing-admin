import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeSliderApi = createApi({
  reducerPath: "homeSliderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["slider"], // Define the tag type
  endpoints: (build) => ({
    createHomeSlider: build.mutation({
      query: (data) => ({
        url: "/homeSlider/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slider"],
    }),

    deleteHomeSlider: build.mutation({
      query: (id) => ({
        url: `/homeSlider/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slider"],
    }),

    updateHomeSlider: build.mutation({
      query: ({ id, data }) => ({
        url: `/homeSlider/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["slider"],
    }),

    getAllHomeSlider: build.query({
      query: () => ({
        url: "/homeSlider",
      }),
      providesTags: ["slider"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHomeSliderMutation,
  useGetAllHomeSliderQuery,
  useDeleteHomeSliderMutation,
  useUpdateHomeSliderMutation,
} = homeSliderApi;
