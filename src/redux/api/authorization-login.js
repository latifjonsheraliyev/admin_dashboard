import { api } from ".";

const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginApi: build.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getUsers: build.query({
      query: () => ({
        url: "auth/profile",
      }),
    }),
  }),
});

export const { useLoginApiMutation, useGetUsersQuery } = loginApi;
