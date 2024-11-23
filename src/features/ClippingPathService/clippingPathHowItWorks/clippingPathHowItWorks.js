import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clippingPathHowItWorksApi = createApi({
  reducerPath: "clippingPathHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["clippingPathHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createclippingPathHowItWorks: build.mutation({
      query: (data) => ({
        url: "/clippingPathHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clippingPathHowItWorks"],
    }),

    deleteclippingPathHowItWorks: build.mutation({
      query: (id) => ({
        url: `/clippingPathHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clippingPathHowItWorks"],
    }),

    updateclippingPathHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/clippingPathHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["clippingPathHowItWorks"],
    }),

    getAllclippingPathHowItWorks: build.query({
      query: () => ({
        url: "/clippingPathHowItWorks",
      }),
      providesTags: ["clippingPathHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateclippingPathHowItWorksMutation,
 useGetAllclippingPathHowItWorksQuery,
 useDeleteclippingPathHowItWorksMutation,
 useUpdateclippingPathHowItWorksMutation
} = clippingPathHowItWorksApi;
