import { api } from "../api/apiSlice";

const userApi=api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<any, number | void>({
            query: (page = 1) => `users?page=${page}`,
          }),
          addUser: builder.mutation<any, Partial<any>>({
            query: (data) => ({
              url: '/register',
              method: 'POST',
              body: data,
            }),
          }),
          updateUser: builder.mutation<any, { id: number; updatedUser: Partial<any> }>({
            query: ({ id, updatedUser }) => ({
              url: `users/${id}`,
              method: 'PUT',
              body: updatedUser,
            }),
          }),
          deleteUser: builder.mutation<any, number>({
            query: (id) => ({
              url: `users/${id}`,
              method: 'DELETE',
            }),
          }),
      }),
});

export const { useAddUserMutation,useGetUsersQuery,useUpdateUserMutation,useDeleteUserMutation }=userApi;