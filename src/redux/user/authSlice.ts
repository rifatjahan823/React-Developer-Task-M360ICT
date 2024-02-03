import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface User {
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null; 

}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,

};

export interface ApiResponse {
  token: string;
}

// Async thunk for login
export const login = createAsyncThunk<ApiResponse, { email: string; password: string }>(
  'auth/login',
  async ({ email, password }) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error();
    }

    return data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Store authentication status in local storage
      localStorage.setItem('authState', JSON.stringify(state));
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;

      // Clear authentication status from local storage
      localStorage.removeItem('authState');
    },
  },
});
export const { setAuth, clearAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
