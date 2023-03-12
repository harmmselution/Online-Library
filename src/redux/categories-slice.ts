import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAllCategories, ICategoriesState } from '../interfaces/interfaces';
import { Status } from '../enums/enums';

export const fetchCategories = createAsyncThunk<IAllCategories[]>('allCategories/fetchCategories', async () => {
  const { data } = await axios.get<IAllCategories[]>('https://strapi.cleverland.by/api/categories');
  return data;
});

const initialState: ICategoriesState = {
  allCategories: [],
  status: Status.DEFAULT,
};

export const categoriesSlice = createSlice({
  name: 'allCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.allCategories = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<IAllCategories[]>) => {
      state.allCategories = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = Status.ERROR;
      state.allCategories = [];
    });
  },
});

export const { reducer: CategoriesReducer } = categoriesSlice;
