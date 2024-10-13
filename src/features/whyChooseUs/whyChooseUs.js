import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const whyChooseUsApi = createApi({
  reducerPath: "whyChooseUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["whyChooseUs"], // Define the tag type
  endpoints: (build) => ({
    createWhyChooseUs: build.mutation({
      query: (data) => ({
        url: "/whyChooseUs/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whyChooseUs"],
    }),

    deleteWhyChooseUs: build.mutation({
      query: (id) => ({
        url: `/whyChooseUs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whyChooseUs"],
    }),

    updateWhyChooseUs: build.mutation({
      query: ({ id, data }) => ({
        url: `/whyChooseUs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["whyChooseUs"],
    }),

    getAllWhyChooseUs: build.query({
      query: () => ({
        url: "/whyChooseUs",
      }),
      providesTags: ["whyChooseUs"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateWhyChooseUsMutation,
  useGetAllWhyChooseUsQuery,
  useDeleteWhyChooseUsMutation,
  useUpdateWhyChooseUsMutation,
} = whyChooseUsApi;
