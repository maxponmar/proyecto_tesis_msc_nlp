import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import server from "../config/config.json";

export const defaultApi = createApi({
  reducerPath: "default",
  baseQuery: fetchBaseQuery({ baseUrl: server.apiurl }),
  tagTypes: ["default"],
  endpoints: (builder) => ({
    getFreelingResults: builder.query({
      query: (text) => ({
        url: "freeling/analyze",
        method: "POST",
        body: text,
      }),
      invalidatesTags: ["default"],
    }),
    exampleQuery: builder.query({
      query: ({ token }) => {
        return {
          url: `default`,
          headers: {
            Authorization: token ? "Bearer " + token : "",
          },
        };
      },
      invalidatesTags: ["default"],
    }),
    exampleMutation: builder.mutation({
      query: ({ body, token }) => {
        return {
          url: `default`,
          method: "POST",
          headers: {
            Authorization: token ? "Bearer " + token : "",
          },
          body: body,
        };
      },
      invalidatesTags: ["default"],
    }),
  }),
});

export const { useLazyGetFreelingResultsQuery } = defaultApi;
