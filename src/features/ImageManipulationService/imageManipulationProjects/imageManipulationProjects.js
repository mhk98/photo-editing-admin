import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageManipulationProjectsApi = createApi({
  reducerPath: "imageManipulationProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageManipulationProjects"], // Define the tag type
  endpoints: (build) => ({
    createimageManipulationProjects: build.mutation({
      query: (data) => ({
        url: "/imageManipulationProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageManipulationProjects"],
    }),

    deleteimageManipulationProjects: build.mutation({
      query: (id) => ({
        url: `/imageManipulationProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageManipulationProjects"],
    }),

    updateimageManipulationProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageManipulationProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageManipulationProjects"],
    }),

    getAllimageManipulationProjects: build.query({
      query: () => ({
        url: "/imageManipulationProjects",
      }),
      providesTags: ["imageManipulationProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageManipulationProjectsMutation,
 useGetAllimageManipulationProjectsQuery,
 useDeleteimageManipulationProjectsMutation,
 useUpdateimageManipulationProjectsMutation

} = imageManipulationProjectsApi;
