import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRestorationTestimonialApi = createApi({
  reducerPath: "imageRestorationTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["imageRestorationTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createimageRestorationTestimonial: build.mutation({
      query: (data) => ({
        url: "/imageRestorationTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRestorationTestimonial"],
    }),

    deleteimageRestorationTestimonial: build.mutation({
      query: (id) => ({
        url: `/imageRestorationTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRestorationTestimonial"],
    }),

    updateimageRestorationTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRestorationTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRestorationTestimonial"],
    }),

    getAllimageRestorationTestimonial: build.query({
      query: () => ({
        url: "/imageRestorationTestimonial",
      }),
      providesTags: ["imageRestorationTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRestorationTestimonialMutation,
  useGetAllimageRestorationTestimonialQuery,
  useDeleteimageRestorationTestimonialMutation,
  useUpdateimageRestorationTestimonialMutation,
} = imageRestorationTestimonialApi;
