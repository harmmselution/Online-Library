import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBook = createAsyncThunk('book/fetchBook', async (id) => {
  const { data } = await axios.get(`https://srapi.cleverland.by/api/books/${id}`);
  return data;
});

const initialState = {
  book: [],
  status: '',
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      const st = state;
      st.book = [];
      st.status = 'loading';
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      const st = state;
      st.book = action.payload;
      st.status = 'success';
    });
    builder.addCase(fetchBook.rejected, (state) => {
      const st = state;
      st.status = 'error';
      st.book = [];
    });
  },
});

export const { reducer: BookReducer } = booksSlice;
