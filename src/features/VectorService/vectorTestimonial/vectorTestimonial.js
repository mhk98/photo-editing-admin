import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vectorTestimonialApi = createApi({
  reducerPath: "vectorTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["vectorTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createvectorTestimonial: build.mutation({
      query: (data) => ({
        url: "/vectorTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vectorTestimonial"],
    }),

    deletevectorTestimonial: build.mutation({
      query: (id) => ({
        url: `/vectorTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vectorTestimonial"],
    }),

    updatevectorTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/vectorTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vectorTestimonial"],
    }),

    getAllvectorTestimonial: build.query({
      query: () => ({
        url: "/vectorTestimonial",
      }),
      providesTags: ["vectorTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatevectorTestimonialMutation,
  useGetAllvectorTestimonialQuery,
  useDeletevectorTestimonialMutation,
  useUpdatevectorTestimonialMutation,
} = vectorTestimonialApi;
