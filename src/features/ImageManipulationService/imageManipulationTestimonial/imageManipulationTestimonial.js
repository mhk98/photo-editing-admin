import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageManipulationTestimonialApi = createApi({
  reducerPath: "imageManipulationTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["imageManipulationTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createimageManipulationTestimonial: build.mutation({
      query: (data) => ({
        url: "/imageManipulationTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageManipulationTestimonial"],
    }),

    deleteimageManipulationTestimonial: build.mutation({
      query: (id) => ({
        url: `/imageManipulationTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageManipulationTestimonial"],
    }),

    updateimageManipulationTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageManipulationTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageManipulationTestimonial"],
    }),

    getAllimageManipulationTestimonial: build.query({
      query: () => ({
        url: "/imageManipulationTestimonial",
      }),
      providesTags: ["imageManipulationTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageManipulationTestimonialMutation,
  useGetAllimageManipulationTestimonialQuery,
  useDeleteimageManipulationTestimonialMutation,
  useUpdateimageManipulationTestimonialMutation,
} = imageManipulationTestimonialApi;
