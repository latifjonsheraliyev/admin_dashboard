import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
  const rowBaseQuery = fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const response = await rowBaseQuery(args, api, extraOptions);

  if (response.error) {
    const { status } = response.error;
    if (status === 401 || status === 403) {
      // dispatch
    }
  }
  return response;
};

const fetchBaeQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaeQueryWithRetry,
  tagTypes: ["LOGIN"],
  endpoints: () => ({}),
});

