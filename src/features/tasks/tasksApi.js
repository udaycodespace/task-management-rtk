import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/todos?_limit=5',
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi
