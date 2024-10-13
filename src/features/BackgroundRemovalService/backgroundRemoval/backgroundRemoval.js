import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BackgroundRemovalApi = createApi({
  reducerPath: "BackgroundRemovalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["backgroundRemoval"], // Define the tag type
  endpoints: (build) => ({
    createBackgroundRemoval: build.mutation({
      query: (data) => ({
        url: "/backgroundRemoval/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clibackgroundRemovalppingPath"],
    }),

    deleteBackgroundRemoval: build.mutation({
      query: (id) => ({
        url: `/backgroundRemoval/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["backgroundRemoval"],
    }),

    updateBackgroundRemoval: build.mutation({
      query: ({ id, data }) => ({
        url: `/backgroundRemoval/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["backgroundRemoval"],
    }),

    getAllBackgroundRemoval: build.query({
      query: () => ({
        url: "/backgroundRemoval",
      }),
      providesTags: ["backgroundRemoval"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateBackgroundRemovalMutation,
  useGetAllBackgroundRemovalQuery,
  useDeleteBackgroundRemovalMutation,
  useUpdateBackgroundRemovalMutation,
} = BackgroundRemovalApi;
