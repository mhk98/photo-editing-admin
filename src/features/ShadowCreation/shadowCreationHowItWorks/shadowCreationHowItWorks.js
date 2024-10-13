import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shadowCreationHowItWorksApi = createApi({
  reducerPath: "shadowCreationHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["shadowCreationHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createshadowCreationHowItWorks: build.mutation({
      query: (data) => ({
        url: "/shadowCreationHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shadowCreationHowItWorks"],
    }),

    deleteshadowCreationHowItWorks: build.mutation({
      query: (id) => ({
        url: `/shadowCreationHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shadowCreationHowItWorks"],
    }),

    updateshadowCreationHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/shadowCreationHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["shadowCreationHowItWorks"],
    }),

    getAllshadowCreationHowItWorks: build.query({
      query: () => ({
        url: "/shadowCreationHowItWorks",
      }),
      providesTags: ["shadowCreationHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateshadowCreationHowItWorksMutation,
 useGetAllshadowCreationHowItWorksQuery,
 useDeleteshadowCreationHowItWorksMutation,
 useUpdateshadowCreationHowItWorksMutation
} = shadowCreationHowItWorksApi;
