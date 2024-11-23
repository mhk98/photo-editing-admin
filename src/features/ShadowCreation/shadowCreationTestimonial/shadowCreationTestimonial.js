import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shadowCreationTestimonialApi = createApi({
  reducerPath: "shadowCreationTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["shadowCreationTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createshadowCreationTestimonial: build.mutation({
      query: (data) => ({
        url: "/shadowCreationTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shadowCreationTestimonial"],
    }),

    deleteshadowCreationTestimonial: build.mutation({
      query: (id) => ({
        url: `/shadowCreationTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shadowCreationTestimonial"],
    }),

    updateshadowCreationTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/shadowCreationTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["shadowCreationTestimonial"],
    }),

    getAllshadowCreationTestimonial: build.query({
      query: () => ({
        url: "/shadowCreationTestimonial",
      }),
      providesTags: ["shadowCreationTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateshadowCreationTestimonialMutation,
  useGetAllshadowCreationTestimonialQuery,
  useDeleteshadowCreationTestimonialMutation,
  useUpdateshadowCreationTestimonialMutation,
} = shadowCreationTestimonialApi;
