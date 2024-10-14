import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vectorHowItWorksApi = createApi({
  reducerPath: "vectorHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["vectorHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createvectorHowItWorks: build.mutation({
      query: (data) => ({
        url: "/vectorHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vectorHowItWorks"],
    }),

    deletevectorHowItWorks: build.mutation({
      query: (id) => ({
        url: `/vectorHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vectorHowItWorks"],
    }),

    updatevectorHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/vectorHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vectorHowItWorks"],
    }),

    getAllvectorHowItWorks: build.query({
      query: () => ({
        url: "/vectorHowItWorks",
      }),
      providesTags: ["vectorHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatevectorHowItWorksMutation,
 useGetAllvectorHowItWorksQuery,
 useDeletevectorHowItWorksMutation,
 useUpdatevectorHowItWorksMutation
} = vectorHowItWorksApi;
