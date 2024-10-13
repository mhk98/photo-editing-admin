import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRetouchingTestimonialApi = createApi({
  reducerPath: "imageRetouchingTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["imageRetouchingTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createimageRetouchingTestimonial: build.mutation({
      query: (data) => ({
        url: "/imageRetouchingTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingTestimonial"],
    }),

    deleteimageRetouchingTestimonial: build.mutation({
      query: (id) => ({
        url: `/imageRetouchingTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRetouchingTestimonial"],
    }),

    updateimageRetouchingTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRetouchingTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRetouchingTestimonial"],
    }),

    getAllimageRetouchingTestimonial: build.query({
      query: () => ({
        url: "/imageRetouchingTestimonial",
      }),
      providesTags: ["imageRetouchingTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRetouchingTestimonialMutation,
  useGetAllimageRetouchingTestimonialQuery,
  useDeleteimageRetouchingTestimonialMutation,
  useUpdateimageRetouchingTestimonialMutation,
} = imageRetouchingTestimonialApi;
