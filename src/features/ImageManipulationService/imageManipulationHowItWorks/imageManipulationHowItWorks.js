import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageManipulationHowItWorksApi = createApi({
  reducerPath: "imageManipulationHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["imageManipulationHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createimageManipulationHowItWorks: build.mutation({
      query: (data) => ({
        url: "/imageManipulationHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageManipulationHowItWorks"],
    }),

    deleteimageManipulationHowItWorks: build.mutation({
      query: (id) => ({
        url: `/imageManipulationHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageManipulationHowItWorks"],
    }),

    updateimageManipulationHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageManipulationHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageManipulationHowItWorks"],
    }),

    getAllimageManipulationHowItWorks: build.query({
      query: () => ({
        url: "/imageManipulationHowItWorks",
      }),
      providesTags: ["imageManipulationHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageManipulationHowItWorksMutation,
 useGetAllimageManipulationHowItWorksQuery,
 useDeleteimageManipulationHowItWorksMutation,
 useUpdateimageManipulationHowItWorksMutation
} = imageManipulationHowItWorksApi;
