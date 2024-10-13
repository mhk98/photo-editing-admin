import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRestorationHowItWorksApi = createApi({
  reducerPath: "imageRestorationHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["imageRestorationHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createimageRestorationHowItWorks: build.mutation({
      query: (data) => ({
        url: "/imageRestorationHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRestorationHowItWorks"],
    }),

    deleteimageRestorationHowItWorks: build.mutation({
      query: (id) => ({
        url: `/imageRestorationHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRestorationHowItWorks"],
    }),

    updateimageRestorationHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRestorationHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRestorationHowItWorks"],
    }),

    getAllimageRestorationHowItWorks: build.query({
      query: () => ({
        url: "/imageRestorationHowItWorks",
      }),
      providesTags: ["imageRestorationHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageRestorationHowItWorksMutation,
 useGetAllimageRestorationHowItWorksQuery,
 useDeleteimageRestorationHowItWorksMutation,
 useUpdateimageRestorationHowItWorksMutation
} = imageRestorationHowItWorksApi;
