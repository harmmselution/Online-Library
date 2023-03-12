import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../enums/enums';
import { IBookPageState, IBookPage } from '../interfaces/interfaces';

export const fetchBook = createAsyncThunk<IBookPage, string>('book/fetchBook', async (id) => {
  const { data } = await axios.get<IBookPage>(`https://strapi.cleverland.by/api/books/${id}`);
  return data;
});

const initialState: IBookPageState = {
  book: null,
  status: Status.DEFAULT,
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.book = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<IBookPage>) => {
      state.book = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.status = Status.ERROR;
      state.book = null;
    });
  },
});

export const { reducer: BookReducer } = booksSlice;
