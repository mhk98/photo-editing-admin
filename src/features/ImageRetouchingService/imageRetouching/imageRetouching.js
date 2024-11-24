import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRetouchingApi = createApi({
  reducerPath: "imageRetouchingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["imageRetouching"], // Define the tag type
  endpoints: (build) => ({
    createimageRetouching: build.mutation({
      query: (data) => ({
        url: "/imageRetouching/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRetouching"],
    }),

    deleteimageRetouching: build.mutation({
      query: (id) => ({
        url: `/imageRetouching/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRetouching"],
    }),

    updateimageRetouching: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRetouching/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRetouching"],
    }),

    getAllimageRetouching: build.query({
      query: () => ({
        url: "/imageRetouching",
      }),
      providesTags: ["imageRetouching"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRetouchingMutation,
  useGetAllimageRetouchingQuery,
  useDeleteimageRetouchingMutation,
  useUpdateimageRetouchingMutation,
} = imageRetouchingApi;
