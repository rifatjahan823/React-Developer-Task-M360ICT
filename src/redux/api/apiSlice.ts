import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    tagTypes:['comments'], //for reloading data fetch comments
    endpoints:()=>({})
  });
  