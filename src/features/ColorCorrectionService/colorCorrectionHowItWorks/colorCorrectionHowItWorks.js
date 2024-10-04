import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorCorrectionHowItWorksApi = createApi({
  reducerPath: "colorCorrectionHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["colorCorrectionHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createcolorCorrectionHowItWorks: build.mutation({
      query: (data) => ({
        url: "/colorCorrectionHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionHowItWorks"],
    }),

    deletecolorCorrectionHowItWorks: build.mutation({
      query: (id) => ({
        url: `/colorCorrectionHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorCorrectionHowItWorks"],
    }),

    updatecolorCorrectionHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/colorCorrectionHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionHowItWorks"],
    }),

    getAllcolorCorrectionHowItWorks: build.query({
      query: () => ({
        url: "/colorCorrectionHowItWorks",
      }),
      providesTags: ["colorCorrectionHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatecolorCorrectionHowItWorksMutation,
 useGetAllcolorCorrectionHowItWorksQuery,
 useDeletecolorCorrectionHowItWorksMutation,
 useUpdatecolorCorrectionHowItWorksMutation
} = colorCorrectionHowItWorksApi;
