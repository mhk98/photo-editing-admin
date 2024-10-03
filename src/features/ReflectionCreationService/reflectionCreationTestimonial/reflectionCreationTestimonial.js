import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reflectionCreationTestimonialApi = createApi({
  reducerPath: "reflectionCreationTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["reflectionCreationTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createreflectionCreationTestimonial: build.mutation({
      query: (data) => ({
        url: "/reflectionCreationTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationTestimonial"],
    }),

    deletereflectionCreationTestimonial: build.mutation({
      query: (id) => ({
        url: `/reflectionCreationTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reflectionCreationTestimonial"],
    }),

    updatereflectionCreationTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/reflectionCreationTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reflectionCreationTestimonial"],
    }),

    getAllreflectionCreationTestimonial: build.query({
      query: () => ({
        url: "/reflectionCreationTestimonial",
      }),
      providesTags: ["reflectionCreationTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatereflectionCreationTestimonialMutation,
  useGetAllreflectionCreationTestimonialQuery,
  useDeletereflectionCreationTestimonialMutation,
  useUpdatereflectionCreationTestimonialMutation,
} = reflectionCreationTestimonialApi;
