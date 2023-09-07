import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TUserDto } from '@/zod.schemas';
import { client } from '@/lib/trpc';

type TUserState = {
  user: Omit<TUserDto, 'accessToken'> | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState = {
  user: null,
  loading: 'idle',
} as TUserState;

const login = createAsyncThunk<TUserDto, { email: string; password: string }>('user/login', async (data) => {
  const userData = client.auth.login.mutate(data);
  return userData;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    }),
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
