import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State, User } from './types/types';
import * as api from './api';

const initialState:State = {
    user: {},
    error: undefined

};

export const registrationUser = createAsyncThunk(
    'auth/registration',
    (action:User) => api.registration(action)
);
export const loginUser = createAsyncThunk(
    'auth/login',
    (action:User) => api.login(action)
);
export const verificationUser = createAsyncThunk(
    'auth/verification',
    () => api.session()
);
export const logoutUser = createAsyncThunk(
    'auth/logout',
    () => api.logout()
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        add: (state) => { state.user = { ...state.user, name: 'бобр' }; }
    },
extraReducers: (builder) => {
    builder
    .addCase(registrationUser.fulfilled, (state, action) => {
       state.user = action.payload;
    })
    .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.error.message;
    })
    .addCase(verificationUser.fulfilled, (state, action) => {
        state.user = action.payload;
     })
     .addCase(verificationUser.rejected, (state, action) => {
         state.error = action.error.message;
     })
     .addCase(logoutUser.fulfilled, (state) => {
        state.user = {};
     })
     .addCase(logoutUser.rejected, (state, action) => {
         state.error = action.error.message;
     });
}
});

export const { add } = authSlice.actions;
export default authSlice.reducer;
