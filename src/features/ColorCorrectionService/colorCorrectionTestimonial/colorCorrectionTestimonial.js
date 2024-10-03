import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorCorrectionTestimonialApi = createApi({
  reducerPath: "colorCorrectionTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["colorCorrectionTestimonial"], // Define the tag type
  endpoints: (build) => ({
    createcolorCorrectionTestimonial: build.mutation({
      query: (data) => ({
        url: "/colorCorrectionTestimonial/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionTestimonial"],
    }),

    deletecolorCorrectionTestimonial: build.mutation({
      query: (id) => ({
        url: `/colorCorrectionTestimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorCorrectionTestimonial"],
    }),

    updatecolorCorrectionTestimonial: build.mutation({
      query: ({ id, data }) => ({
        url: `/colorCorrectionTestimonial/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionTestimonial"],
    }),

    getAllcolorCorrectionTestimonial: build.query({
      query: () => ({
        url: "/colorCorrectionTestimonial",
      }),
      providesTags: ["colorCorrectionTestimonial"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatecolorCorrectionTestimonialMutation,
  useGetAllcolorCorrectionTestimonialQuery,
  useDeletecolorCorrectionTestimonialMutation,
  useUpdatecolorCorrectionTestimonialMutation,
} = colorCorrectionTestimonialApi;
