import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shadowCreationProjectsApi = createApi({
  reducerPath: "shadowCreationProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["shadowCreationProjects"], // Define the tag type
  endpoints: (build) => ({
    createshadowCreationProjects: build.mutation({
      query: (data) => ({
        url: "/shadowCreationProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shadowCreationProjects"],
    }),

    deleteshadowCreationProjects: build.mutation({
      query: (id) => ({
        url: `/shadowCreationProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shadowCreationProjects"],
    }),

    updateshadowCreationProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/shadowCreationProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["shadowCreationProjects"],
    }),

    getAllshadowCreationProjects: build.query({
      query: () => ({
        url: "/shadowCreationProjects",
      }),
      providesTags: ["shadowCreationProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateshadowCreationProjectsMutation,
 useGetAllshadowCreationProjectsQuery,
 useDeleteshadowCreationProjectsMutation,
 useUpdateshadowCreationProjectsMutation

} = shadowCreationProjectsApi;
