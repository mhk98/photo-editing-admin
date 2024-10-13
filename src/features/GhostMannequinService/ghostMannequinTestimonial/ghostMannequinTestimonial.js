import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghostMannequinTestimonialApi = createApi({
  reducerPath: "ghostMannequinTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["ghostMannequinTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createghostMannequinTestimonial: build.mutation({
      query: (data) => ({
        url: "/ghostMannequinTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinTestimonial"],
    }),

    deleteghostMannequinTestimonial: build.mutation({
      query: (id) => ({
        url: `/ghostMannequinTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ghostMannequinTestimonial"],
    }),

    updateghostMannequinTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/ghostMannequinTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ghostMannequinTestimonial"],
    }),

    getAllghostMannequinTestimonial: build.query({
      query: () => ({
        url: "/ghostMannequinTestimonial",
      }),
      providesTags: ["ghostMannequinTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateghostMannequinTestimonialMutation,
  useGetAllghostMannequinTestimonialQuery,
  useDeleteghostMannequinTestimonialMutation,
  useUpdateghostMannequinTestimonialMutation,
} = ghostMannequinTestimonialApi;
