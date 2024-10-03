import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const whyChooseUsApi = createApi({
  reducerPath: "whyChooseUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://photo-editing-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["howItWorks"], // Define the tag type
  endpoints: (build) => ({
    createWhyChooseUs: build.mutation({
      query: (data) => ({
        url: "/whyChooseUsApi/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whyChooseUsApi"],
    }),

    deleteWhyChooseUs: build.mutation({
      query: (id) => ({
        url: `/whyChooseUsApi/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whyChooseUsApi"],
    }),

    updateWhyChooseUs: build.mutation({
      query: ({ id, data }) => ({
        url: `/whyChooseUsApi/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["whyChooseUsApi"],
    }),

    getAllWhyChooseUs: build.query({
      query: () => ({
        url: "/whyChooseUsApi",
      }),
      providesTags: ["whyChooseUsApi"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateWhyChooseUsMutation,
  useGetAllWhyChooseUsQuery,
  useDeleteWhyChooseUsMutation,
  useUpdateWhyChooseUsMutation,
} = whyChooseUsApi;
