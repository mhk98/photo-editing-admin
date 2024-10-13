import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["news"], // Define the tag type
  endpoints: (build) => ({
    createNews: build.mutation({
      query: (data) => ({
        url: "/news/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["news"],
    }),

    deleteNews: build.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["news"],
    }),

    updateNews: build.mutation({
      query: ({ id, data }) => ({
        url: `/news/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["news"],
    }),

    getAllNews: build.query({
      query: () => ({
        url: "/news",
      }),
      providesTags: ["news"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateNewsMutation,
  useGetAllNewsQuery,
  useDeleteNewsMutation,
  useUpdateNewsMutation,
} = newsApi;
