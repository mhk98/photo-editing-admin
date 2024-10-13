import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pricingPlanApi = createApi({
  reducerPath: "pricingPlanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["pricingPlan"], // Define the tag type
  endpoints: (build) => ({
    createPricingPlan: build.mutation({
      query: (data) => ({
        url: "/pricingPlan/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["pricingPlan"],
    }),

    deletePricingPlan: build.mutation({
      query: (id) => ({
        url: `/pricingPlan/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pricingPlan"],
    }),

    updatePricingPlan: build.mutation({
      query: ({ id, data }) => ({
        url: `/pricingPlan/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["pricingPlan"],
    }),

    getAllPricingPlan: build.query({
      query: () => ({
        url: "/pricingPlan",
      }),
      providesTags: ["pricingPlan"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatePricingPlanMutation,
  useGetAllPricingPlanQuery,
  useDeletePricingPlanMutation,
  useUpdatePricingPlanMutation,
} = pricingPlanApi;
