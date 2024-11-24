import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vectorApi = createApi({
  reducerPath: "vectorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pixamoss.com/api/v1/",
  }),

  tagTypes: ["vector"], // Define the tag type
  endpoints: (build) => ({
    createvector: build.mutation({
      query: (data) => ({
        url: "/vector/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vector"],
    }),

    deletevector: build.mutation({
      query: (id) => ({
        url: `/vector/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vector"],
    }),

    updatevector: build.mutation({
      query: ({ id, data }) => ({
        url: `/vector/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vector"],
    }),

    getAllvector: build.query({
      query: () => ({
        url: "/vector",
      }),
      providesTags: ["vector"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreatevectorMutation,
  useGetAllvectorQuery,
  useDeletevectorMutation,
  useUpdatevectorMutation,
} = vectorApi;
