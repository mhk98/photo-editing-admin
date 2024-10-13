import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutUsApi = createApi({
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["about"], // Define the tag type
  endpoints: (build) => ({
    createAboutUs: build.mutation({
      query: (data) => ({
        url: "/aboutUs/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),

    deleteAboutUs: build.mutation({
      query: (id) => ({
        url: `/aboutUs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["about"],
    }),

    updateAboutUs: build.mutation({
      query: ({ id, data }) => ({
        url: `/aboutUs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),

    getAllAboutUs: build.query({
      query: () => ({
        url: "/aboutUs",
      }),
      providesTags: ["about"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateAboutUsMutation,
  useGetAllAboutUsQuery,
  useDeleteAboutUsMutation,
  useUpdateAboutUsMutation,
} = aboutUsApi;
