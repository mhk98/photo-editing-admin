import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const howItWorksApi = createApi({
  reducerPath: "howItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["howItWorks"], // Define the tag type
  endpoints: (build) => ({
    createHowItWorks: build.mutation({
      query: (data) => ({
        url: "/howItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["howItWorks"],
    }),

    deleteHowItWorks: build.mutation({
      query: (id) => ({
        url: `/howItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["howItWorks"],
    }),

    updateHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/howItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["howItWorks"],
    }),

    getAllHowItWorks: build.query({
      query: () => ({
        url: "/howItWorks",
      }),
      providesTags: ["howItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHowItWorksMutation,
  useGetAllHowItWorksQuery,
  useDeleteHowItWorksMutation,
  useUpdateHowItWorksMutation,
} = howItWorksApi;
