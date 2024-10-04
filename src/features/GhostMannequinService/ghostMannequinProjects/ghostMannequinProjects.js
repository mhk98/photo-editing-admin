import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghostMannequinProjectsApi = createApi({
  reducerPath: "ghostMannequinProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["ghostMannequinProjects"], // Define the tag type
  endpoints: (build) => ({
    createghostMannequinProjects: build.mutation({
      query: (data) => ({
        url: "/ghostMannequinProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinProjects"],
    }),

    deleteghostMannequinProjects: build.mutation({
      query: (id) => ({
        url: `/ghostMannequinProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ghostMannequinProjects"],
    }),

    updateghostMannequinProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/ghostMannequinProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinProjects"],
    }),

    getAllghostMannequinProjects: build.query({
      query: () => ({
        url: "/ghostMannequinProjects",
      }),
      providesTags: ["ghostMannequinProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateghostMannequinProjectsMutation,
 useGetAllghostMannequinProjectsQuery,
 useDeleteghostMannequinProjectsMutation,
 useUpdateghostMannequinProjectsMutation

} = ghostMannequinProjectsApi;
