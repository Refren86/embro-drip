import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { client } from '@/lib/trpc';
import { TRPCClientError } from '@trpc/client';
import { TLoginData, TSignUpData, TUserDto } from '@/zod.schemas';

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

export const signUp = createAsyncThunk<TUserDto, TSignUpData, { rejectValue: string }>(
  'user/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const userData = await client.auth.createUser.mutate(data);

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

export const getUser = createAsyncThunk<TUserDto, void, { rejectValue: string }>(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await client.auth.getUser.query();
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
        state.error = null;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
