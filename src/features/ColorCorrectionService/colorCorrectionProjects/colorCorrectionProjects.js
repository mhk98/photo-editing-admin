import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorCorrectionProjectsApi = createApi({
  reducerPath: "colorCorrectionProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["colorCorrectionProjects"], // Define the tag type
  endpoints: (build) => ({
    createcolorCorrectionProjects: build.mutation({
      query: (data) => ({
        url: "/colorCorrectionProjects/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionProjects"],
    }),

    deletecolorCorrectionProjects: build.mutation({
      query: (id) => ({
        url: `/colorCorrectionProjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorCorrectionProjects"],
    }),

    updatecolorCorrectionProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/colorCorrectionProjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorCorrectionProjects"],
    }),

    getAllcolorCorrectionProjects: build.query({
      query: () => ({
        url: "/colorCorrectionProjects",
      }),
      providesTags: ["colorCorrectionProjects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
 useCreatecolorCorrectionProjectsMutation,
 useGetAllcolorCorrectionProjectsQuery,
 useDeletecolorCorrectionProjectsMutation,
 useUpdatecolorCorrectionProjectsMutation

} = colorCorrectionProjectsApi;
