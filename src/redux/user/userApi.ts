import { IUser } from "../../types/globalTypes";
import { api } from "../api/apiSlice";

interface PaginatedUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data:IUser[];
}

const userApi=api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<PaginatedUserResponse, number>({
            query: (page) => `users?page=${page}`,
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
          deleteUser: builder.mutation< void,number>({
            query: (id) => ({
              url: `users/${id}`,
              method: 'DELETE',
            }),
          }),
      }),
});

export const { useAddUserMutation,useGetUsersQuery,useUpdateUserMutation,useDeleteUserMutation }=userApi;