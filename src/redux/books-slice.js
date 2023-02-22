import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('allBooks/fetchBooks', async () => {
  const { data } = await axios.get('https://strapi.cleverland.by/api/books');
  return data;
});

const initialState = {
  allBooks: [],
  status: '',
  userInput: '',
};

export const booksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    bookSearch: (state, action) => {
      let st = state;
      st = st.allBooks.filter((book) => book.title === action.payload);
    },
    changeUserInput: (state, action) => {
      const st = state;
      st.userInput = action.payload;
    },
  },
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
export const { changeCategory, bookSearch, changeUserInput, sortDescending, sortAscending } = booksSlice.actions;
