import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeBannerApi = createApi({
  reducerPath: "homeBannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["banner"], // Define the tag type
  endpoints: (build) => ({
    createHomeBanner: build.mutation({
      query: (data) => ({
        url: "/homeBanner/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    deleteHomeBanner: build.mutation({
      query: (id) => ({
        url: `/homeBanner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),

    updateHomeBanner: build.mutation({
      query: ({ id, data }) => ({
        url: `/homeBanner/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    getAllHomeBanner: build.query({
      query: () => ({
        url: "/homeBanner",
      }),
      providesTags: ["banner"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHomeBannerMutation,
  useGetAllHomeBannerQuery,
  useDeleteHomeBannerMutation,
  useUpdateHomeBannerMutation,
} = homeBannerApi;
