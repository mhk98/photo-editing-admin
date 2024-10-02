import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const removeImageApi = createApi({
  reducerPath: "removeImageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["removeImage"], // Define the tag type
  endpoints: (build) => ({
    createRemoveImage: build.mutation({
      query: (data) => ({
        url: "/removeImage/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["removeImage"],
    }),

    deleteRemoveImage: build.mutation({
      query: (id) => ({
        url: `/removeImage/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["removeImage"],
    }),

    updateRemoveImage: build.mutation({
      query: ({ id, data }) => ({
        url: `/removeImage/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["removeImage"],
    }),

    getAllRemoveImage: build.query({
      query: () => ({
        url: "/removeImage",
      }),
      providesTags: ["removeImage"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateRemoveImageMutation,
  useGetAllRemoveImageQuery,
  useDeleteRemoveImageMutation,
  useUpdateRemoveImageMutation,
} = removeImageApi;
