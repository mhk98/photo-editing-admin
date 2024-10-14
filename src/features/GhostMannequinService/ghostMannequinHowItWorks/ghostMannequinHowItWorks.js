import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghostMannequinHowItWorksApi = createApi({
  reducerPath: "ghostMannequinHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["ghostMannequinHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createghostMannequinHowItWorks: build.mutation({
      query: (data) => ({
        url: "/ghostMannequinHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinHowItWorks"],
    }),

    deleteghostMannequinHowItWorks: build.mutation({
      query: (id) => ({
        url: `/ghostMannequinHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ghostMannequinHowItWorks"],
    }),

    updateghostMannequinHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/ghostMannequinHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinHowItWorks"],
    }),

    getAllghostMannequinHowItWorks: build.query({
      query: () => ({
        url: "/ghostMannequinHowItWorks",
      }),
      providesTags: ["ghostMannequinHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateghostMannequinHowItWorksMutation,
 useGetAllghostMannequinHowItWorksQuery,
 useDeleteghostMannequinHowItWorksMutation,
 useUpdateghostMannequinHowItWorksMutation
} = ghostMannequinHowItWorksApi;
