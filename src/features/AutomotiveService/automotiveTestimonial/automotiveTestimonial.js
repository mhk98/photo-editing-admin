import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AutomotiveTestimonialApi = createApi({
  reducerPath: "AutomotiveTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["automotiveTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createAutomotiveTestimonial: build.mutation({
      query: (data) => ({
        url: "/automotiveTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["automotiveTestimonial"],
    }),

    deleteAutomotiveTestimonial: build.mutation({
      query: (id) => ({
        url: `/automotiveTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["automotiveTestimonial"],
    }),

    updateAutomotiveTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/automotiveTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["automotiveTestimonial"],
    }),

    getAllAutomotiveTestimonial: build.query({
      query: () => ({
        url: "/automotiveTestimonial",
      }),
      providesTags: ["automotiveTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateAutomotiveTestimonialMutation,
  useGetAllAutomotiveTestimonialQuery,
  useDeleteAutomotiveTestimonialMutation,
  useUpdateAutomotiveTestimonialMutation,
} = AutomotiveTestimonialApi;
