import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BackgroundRemovalHowItWorksApi = createApi({
  reducerPath: "BackgroundRemovalHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["backgroundRemovalHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createBackgroundRemovalHowItWorks: build.mutation({
      query: (data) => ({
        url: "/backgroundRemovalHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalHowItWorks"],
    }),

    deleteBackgroundRemovalHowItWorks: build.mutation({
      query: (id) => ({
        url: `/backgroundRemovalHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["backgroundRemovalHowItWorks"],
    }),

    updateBackgroundRemovalHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/backgroundRemovalHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalHowItWorks"],
    }),

    getAllBackgroundRemovalHowItWorks: build.query({
      query: () => ({
        url: "/backgroundRemovalHowItWorks",
      }),
      providesTags: ["backgroundRemovalHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateBackgroundRemovalHowItWorksMutation,
 useGetAllBackgroundRemovalHowItWorksQuery,
 useDeleteBackgroundRemovalHowItWorksMutation,
 useUpdateBackgroundRemovalHowItWorksMutation
} = BackgroundRemovalHowItWorksApi;
