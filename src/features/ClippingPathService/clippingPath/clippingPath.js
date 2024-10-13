import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clippingPathApi = createApi({
  reducerPath: "clippingPathApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["clippingPath"], // Define the tag type
  endpoints: (build) => ({
    createclippingPath: build.mutation({
      query: (data) => ({
        url: "/clippingPath/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clippingPath"],
    }),

    deleteclippingPath: build.mutation({
      query: (id) => ({
        url: `/clippingPath/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clippingPath"],
    }),

    updateclippingPath: build.mutation({
      query: ({ id, data }) => ({
        url: `/clippingPath/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["clippingPath"],
    }),

    getAllclippingPath: build.query({
      query: () => ({
        url: "/clippingPath",
      }),
      providesTags: ["clippingPath"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateclippingPathMutation,
  useGetAllclippingPathQuery,
  useDeleteclippingPathMutation,
  useUpdateclippingPathMutation,
} = clippingPathApi;
