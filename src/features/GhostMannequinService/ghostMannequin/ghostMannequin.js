import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghostMannequinApi = createApi({
  reducerPath: "ghostMannequinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["ghostMannequin"], // Define the tag type
  endpoints: (build) => ({
    createghostMannequin: build.mutation({
      query: (data) => ({
        url: "/ghostMannequin/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ghostMannequin"],
    }),

    deleteghostMannequin: build.mutation({
      query: (id) => ({
        url: `/ghostMannequin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ghostMannequin"],
    }),

    updateghostMannequin: build.mutation({
      query: ({ id, data }) => ({
        url: `/ghostMannequin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ghostMannequin"],
    }),

    getAllghostMannequin: build.query({
      query: () => ({
        url: "/ghostMannequin",
      }),
      providesTags: ["ghostMannequin"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateghostMannequinMutation,
  useGetAllghostMannequinQuery,
  useDeleteghostMannequinMutation,
  useUpdateghostMannequinMutation,
} = ghostMannequinApi;
