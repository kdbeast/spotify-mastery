import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "ea89ff1f9cmshf6d44a7b7c7be87p10a81djsn9684424fb43e"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
    //   query: () => "/charts/world?country_code=IN",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
