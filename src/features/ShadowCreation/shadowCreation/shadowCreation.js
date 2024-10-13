import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shadowCreationApi = createApi({
  reducerPath: "shadowCreationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["shadowCreation"], // Define the tag type
  endpoints: (build) => ({
    createshadowCreation: build.mutation({
      query: (data) => ({
        url: "/shadowCreation/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shadowCreation"],
    }),

    deleteshadowCreation: build.mutation({
      query: (id) => ({
        url: `/shadowCreation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shadowCreation"],
    }),

    updateshadowCreation: build.mutation({
      query: ({ id, data }) => ({
        url: `/shadowCreation/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["shadowCreation"],
    }),

    getAllshadowCreation: build.query({
      query: () => ({
        url: "/shadowCreation",
      }),
      providesTags: ["shadowCreation"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateshadowCreationMutation,
  useGetAllshadowCreationQuery,
  useDeleteshadowCreationMutation,
  useUpdateshadowCreationMutation,
} = shadowCreationApi;
