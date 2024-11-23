import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BackgroundRemovalTestimonialApi = createApi({
  reducerPath: "BackgroundRemovalTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["backgroundRemovalTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createBackgroundRemovalTestimonial: build.mutation({
      query: (data) => ({
        url: "/backgroundRemovalTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalTestimonial"],
    }),

    deleteBackgroundRemovalTestimonial: build.mutation({
      query: (id) => ({
        url: `/backgroundRemovalTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["backgroundRemovalTestimonial"],
    }),

    updateBackgroundRemovalTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/backgroundRemovalTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["backgroundRemovalTestimonial"],
    }),

    getAllBackgroundRemovalTestimonial: build.query({
      query: () => ({
        url: "/backgroundRemovalTestimonial",
      }),
      providesTags: ["backgroundRemovalTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateBackgroundRemovalTestimonialMutation,
  useGetAllBackgroundRemovalTestimonialQuery,
  useDeleteBackgroundRemovalTestimonialMutation,
  useUpdateBackgroundRemovalTestimonialMutation,
} = BackgroundRemovalTestimonialApi;
