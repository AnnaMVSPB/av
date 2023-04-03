import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Ad, IdAdd, State } from './types/types';
import * as api from './api';

const initialState:State = {
adsArr: [],
    error: undefined

};

export const initAd = createAsyncThunk(
    'ad/init',
    () => api.initAd()
);

export const addAd = createAsyncThunk(
    'ad/add',
    (action:Ad) => api.addAd(action)
);
export const deleteAd = createAsyncThunk(
    'ad/delete',
    (action:IdAdd) => api.deleteAd(action)
);

const adSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
extraReducers: (builder) => {
    builder
    .addCase(initAd.fulfilled, (state, action) => {
        state.adsArr = action.payload;
     })
     .addCase(initAd.rejected, (state, action) => {
         state.error = action.error.message;
     })
    .addCase(addAd.fulfilled, (state, action) => {
       state.adsArr.push(action.payload);
    })
    .addCase(addAd.rejected, (state, action) => {
        state.error = action.error.message;
    })
    .addCase(deleteAd.fulfilled, (state, action) => {
        state.adsArr = state.adsArr.filter((ad) => ad.id !== action.payload);
     })
     .addCase(deleteAd.rejected, (state, action) => {
         state.error = action.error.message;
     });
}
});

export default adSlice.reducer;
