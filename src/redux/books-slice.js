import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('allBooks/fetchBooks', async () => {
  const { data } = await axios.get('https://strapi.cleverland.by/api/books');
  return data;
});

const initialState = {
  allBooks: [],
  status: '',
};

export const booksSlice = createSlice({
  name: 'allBooks',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      const st = state;
      st.allBooks = [];
      st.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const st = state;
      st.allBooks = action.payload;
      st.status = 'success';
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      const st = state;
      st.status = 'error';
      st.allBooks = [];
    });
  },
});

export const { reducer: BooksReducer } = booksSlice;
export const { changeCategory } = booksSlice.actions;
