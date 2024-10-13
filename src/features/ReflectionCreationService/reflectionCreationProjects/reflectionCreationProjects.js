import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reflectionCreationProjectsApi = createApi({
  reducerPath: "reflectionCreationProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["reflectionCreationProjects"], // Define the tag type
  endpoints: (build) => ({
    createreflectionCreationProjects: build.mutation({
      query: (data) => ({
        url: "/reflectionCreationProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationProjects"],
    }),

    deletereflectionCreationProjects: build.mutation({
      query: (id) => ({
        url: `/reflectionCreationProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reflectionCreationProjects"],
    }),

    updatereflectionCreationProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/reflectionCreationProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationProjects"],
    }),

    getAllreflectionCreationProjects: build.query({
      query: () => ({
        url: "/reflectionCreationProjects",
      }),
      providesTags: ["reflectionCreationProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatereflectionCreationProjectsMutation,
 useGetAllreflectionCreationProjectsQuery,
 useDeletereflectionCreationProjectsMutation,
 useUpdatereflectionCreationProjectsMutation

} = reflectionCreationProjectsApi;
