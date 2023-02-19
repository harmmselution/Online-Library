import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('allCategories/fetchCategories', async () => {
  const { data } = await axios.get('https://strapi.cleverland.by/api/categories');
  return data;
});

const initialState = {
  allCategories: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'allCategories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      const st = state;
      st.allCategories = [];
      st.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const st = state;
      st.allCategories = action.payload;
      st.status = 'success';
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      const st = state;
      st.status = 'error';
      st.allCategories = [];
    });
  },
});

export const { reducer: CategoriesReducer } = categoriesSlice;
