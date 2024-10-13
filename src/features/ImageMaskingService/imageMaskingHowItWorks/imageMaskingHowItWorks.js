import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageMaskingHowItWorksApi = createApi({
  reducerPath: "imageMaskingHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["imageMaskingHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createimageMaskingHowItWorks: build.mutation({
      query: (data) => ({
        url: "/imageMaskingHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageMaskingHowItWorks"],
    }),

    deleteimageMaskingHowItWorks: build.mutation({
      query: (id) => ({
        url: `/imageMaskingHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageMaskingHowItWorks"],
    }),

    updateimageMaskingHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageMaskingHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageMaskingHowItWorks"],
    }),

    getAllimageMaskingHowItWorks: build.query({
      query: () => ({
        url: "/imageMaskingHowItWorks",
      }),
      providesTags: ["imageMaskingHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageMaskingHowItWorksMutation,
 useGetAllimageMaskingHowItWorksQuery,
 useDeleteimageMaskingHowItWorksMutation,
 useUpdateimageMaskingHowItWorksMutation
} = imageMaskingHowItWorksApi;
