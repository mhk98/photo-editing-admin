import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["clients"], // Define the tag type
  endpoints: (build) => ({
    createClients: build.mutation({
      query: (data) => ({
        url: "/clients/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    deleteClients: build.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clients"],
    }),

    updateClients: build.mutation({
      query: ({ id, data }) => ({
        url: `/clients/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    getAllClients: build.query({
      query: () => ({
        url: "/clients",
      }),
      providesTags: ["clients"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateClientsMutation,
  useGetAllClientsQuery,
  useDeleteClientsMutation,
  useUpdateClientsMutation,
} = clientsApi;
