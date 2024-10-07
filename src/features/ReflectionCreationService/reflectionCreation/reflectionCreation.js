import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reflectionCreationApi = createApi({
  reducerPath: "reflectionCreationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["reflectionCreation"], // Define the tag type
  endpoints: (build) => ({
    createreflectionCreation: build.mutation({
      query: (data) => ({
        url: "/reflectionCreation/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reflectionCreation"],
    }),

    deletereflectionCreation: build.mutation({
      query: (id) => ({
        url: `/reflectionCreation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reflectionCreation"],
    }),

    updatereflectionCreation: build.mutation({
      query: ({ id, data }) => ({
        url: `/reflectionCreation/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reflectionCreation"],
    }),

    getAllreflectionCreation: build.query({
      query: () => ({
        url: "/reflectionCreation",
      }),
      providesTags: ["reflectionCreation"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatereflectionCreationMutation,
  useGetAllreflectionCreationQuery,
  useDeletereflectionCreationMutation,
  useUpdatereflectionCreationMutation,
} = reflectionCreationApi;
