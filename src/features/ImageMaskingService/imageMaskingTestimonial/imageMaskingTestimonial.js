import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageMaskingTestimonialApi = createApi({
  reducerPath: "imageMaskingTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["imageMaskingTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createimageMaskingTestimonial: build.mutation({
      query: (data) => ({
        url: "/imageMaskingTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageMaskingTestimonial"],
    }),

    deleteimageMaskingTestimonial: build.mutation({
      query: (id) => ({
        url: `/imageMaskingTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageMaskingTestimonial"],
    }),

    updateimageMaskingTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageMaskingTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageMaskingTestimonial"],
    }),

    getAllimageMaskingTestimonial: build.query({
      query: () => ({
        url: "/imageMaskingTestimonial",
      }),
      providesTags: ["imageMaskingTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageMaskingTestimonialMutation,
  useGetAllimageMaskingTestimonialQuery,
  useDeleteimageMaskingTestimonialMutation,
  useUpdateimageMaskingTestimonialMutation,
} = imageMaskingTestimonialApi;
