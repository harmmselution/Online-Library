import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../enums/enums';
import { IAllBooks, IBooksState } from '../interfaces/interfaces';

export const fetchBooks = createAsyncThunk<IAllBooks[]>('allBooks/fetchBooks', async () => {
  const { data } = await axios.get<IAllBooks[]>('https://strapi.cleverland.by/api/books');
  return data;
});

const initialState: IBooksState = {
  allBooks: [],
  status: Status.DEFAULT,
  userInput: '',
};

export const booksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    bookSearch: (state, action: PayloadAction<string>) => {
      state.allBooks = state.allBooks.filter((book) => book.title === action.payload);
    },
    changeUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.allBooks = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IAllBooks[]>) => {
      state.allBooks = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.allBooks = [];
    });
  },
});

export const { reducer: BooksReducer } = booksSlice;
export const { bookSearch, changeUserInput } = booksSlice.actions;
