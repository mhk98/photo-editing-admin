import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ClippingPathTestimonialApi = createApi({
  reducerPath: "ClippingPathTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["clippingPathTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createClippingPathTestimonial: build.mutation({
      query: (data) => ({
        url: "/ClippingPathTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clippingPathTestimonial"],
    }),

    deleteClippingPathTestimonial: build.mutation({
      query: (id) => ({
        url: `/ClippingPathTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clippingPathTestimonial"],
    }),

    updateClippingPathTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/ClippingPathTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["clippingPathTestimonial"],
    }),

    getAllClippingPathTestimonial: build.query({
      query: () => ({
        url: "/ClippingPathTestimonial",
      }),
      providesTags: ["clippingPathTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateClippingPathTestimonialMutation,
  useGetAllClippingPathTestimonialQuery,
  useDeleteClippingPathTestimonialMutation,
  useUpdateClippingPathTestimonialMutation,
} = ClippingPathTestimonialApi;
