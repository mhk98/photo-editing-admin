import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reflectionCreationHowItWorksApi = createApi({
  reducerPath: "reflectionCreationHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["reflectionCreationHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createreflectionCreationHowItWorks: build.mutation({
      query: (data) => ({
        url: "/reflectionCreationHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationHowItWorks"],
    }),

    deletereflectionCreationHowItWorks: build.mutation({
      query: (id) => ({
        url: `/reflectionCreationHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reflectionCreationHowItWorks"],
    }),

    updatereflectionCreationHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/reflectionCreationHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationHowItWorks"],
    }),

    getAllreflectionCreationHowItWorks: build.query({
      query: () => ({
        url: "/reflectionCreationHowItWorks",
      }),
      providesTags: ["reflectionCreationHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatereflectionCreationHowItWorksMutation,
 useGetAllreflectionCreationHowItWorksQuery,
 useDeletereflectionCreationHowItWorksMutation,
 useUpdatereflectionCreationHowItWorksMutation
} = reflectionCreationHowItWorksApi;
