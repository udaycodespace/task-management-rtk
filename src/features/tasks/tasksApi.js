// src/features/tasks/tasksApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Task'], // Required for Issue #5, #6, #7 (Cache Invalidation)
  endpoints: (builder) => ({
    // Issue #4: Fetch Task List
    getTasks: builder.query({
      query: () => '/todos?_limit=10',
      providesTags: ['Task'], 
    }),
    // Issue #5: Add Task
    addTask: builder.mutation({
      query: (newTask) => ({
        url: '/todos',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Task'], // This triggers the auto-refetch
    }),
    // Issue #6: Update Task
    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Task'],
    }),
    // Issue #7: Delete Task
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
})

export const { 
  useGetTasksQuery, 
  useAddTaskMutation, 
  useUpdateTaskMutation, 
  useDeleteTaskMutation 
} = tasksApi