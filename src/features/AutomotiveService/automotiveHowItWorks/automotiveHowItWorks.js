import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const automotiveHowItWorksApi = createApi({
  reducerPath: "automotiveHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["automotiveHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createAutomotiveHowItWorks: build.mutation({
      query: (data) => ({
        url: "/automotiveHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["automotiveHowItWorks"],
    }),

    deleteAutomotiveHowItWorks: build.mutation({
      query: (id) => ({
        url: `/automotiveHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["automotiveHowItWorks"],
    }),

    updateAutomotiveHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/automotiveHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["automotiveHowItWorks"],
    }),

    getAllAutomotiveHowItWorks: build.query({
      query: () => ({
        url: "/automotiveHowItWorks",
      }),
      providesTags: ["automotiveHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateAutomotiveHowItWorksMutation,
 useGetAllAutomotiveHowItWorksQuery,
 useDeleteAutomotiveHowItWorksMutation,
 useUpdateAutomotiveHowItWorksMutation
} = automotiveHowItWorksApi;
