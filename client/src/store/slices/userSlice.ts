import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TLoginData, TUserDto } from '@/zod.schemas';
import { client } from '@/lib/trpc';
import { TRPCClientError } from '@trpc/client';

type TUserState = {
  user: Omit<TUserDto, 'accessToken'> | null;
  loading: boolean;
  error?: string | null;
};

const initialState = {
  user: null,
  loading: false,
  error: null,
} as TUserState;

export const login = createAsyncThunk<TUserDto, TLoginData, { rejectValue: string }>(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const userData = await client.auth.login.mutate(data);

      if (userData && userData.accessToken) {
        localStorage.setItem('accessToken', userData.accessToken);
      }

      return userData;
    } catch (error) {
      if (error instanceof TRPCClientError) {
        return rejectWithValue(error.message);
      }

      const err = error as Error;
      return rejectWithValue(err.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
