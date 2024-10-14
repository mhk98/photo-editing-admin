import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageManipulationApi = createApi({
  reducerPath: "imageManipulationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageManipulation"], // Define the tag type
  endpoints: (build) => ({
    createimageManipulation: build.mutation({
      query: (data) => ({
        url: "/imageManipulation/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageManipulation"],
    }),

    deleteimageManipulation: build.mutation({
      query: (id) => ({
        url: `/imageManipulation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageManipulation"],
    }),

    updateimageManipulation: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageManipulation/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageManipulation"],
    }),

    getAllimageManipulation: build.query({
      query: () => ({
        url: "/imageManipulation",
      }),
      providesTags: ["imageManipulation"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageManipulationMutation,
  useGetAllimageManipulationQuery,
  useDeleteimageManipulationMutation,
  useUpdateimageManipulationMutation,
} = imageManipulationApi;
