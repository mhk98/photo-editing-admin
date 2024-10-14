import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialApi = createApi({
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["testimonial"], // Define the tag type
  endpoints: (build) => ({
    createTestimonial: build.mutation({
      query: (data) => ({
        url: "/testimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),

    deleteTestimonial: build.mutation({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonial"],
    }),

    updateTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/testimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),

    getAllTestimonial: build.query({
      query: () => ({
        url: "/testimonial",
      }),
      providesTags: ["testimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateTestimonialMutation,
  useGetAllTestimonialQuery,
  useDeleteTestimonialMutation,
  useUpdateTestimonialMutation,
} = testimonialApi;
