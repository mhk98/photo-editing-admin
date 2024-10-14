import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRetouchingHowItWorksApi = createApi({
  reducerPath: "imageRetouchingHowItWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageRetouchingHowItWorks"], // Define the tag type
  endpoints: (build) => ({
    createimageRetouchingHowItWorks: build.mutation({
      query: (data) => ({
        url: "/imageRetouchingHowItWorks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingHowItWorks"],
    }),

    deleteimageRetouchingHowItWorks: build.mutation({
      query: (id) => ({
        url: `/imageRetouchingHowItWorks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRetouchingHowItWorks"],
    }),

    updateimageRetouchingHowItWorks: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRetouchingHowItWorks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingHowItWorks"],
    }),

    getAllimageRetouchingHowItWorks: build.query({
      query: () => ({
        url: "/imageRetouchingHowItWorks",
      }),
      providesTags: ["imageRetouchingHowItWorks"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreateimageRetouchingHowItWorksMutation,
 useGetAllimageRetouchingHowItWorksQuery,
 useDeleteimageRetouchingHowItWorksMutation,
 useUpdateimageRetouchingHowItWorksMutation
} = imageRetouchingHowItWorksApi;
