import { configureStore } from '@reduxjs/toolkit';
import { BooksReducer } from './books-slice';
import { BurgerReducer } from './burger-slice';
import { BookReducer } from './book-slice';
import { CategoriesReducer } from './categories-slice';

export const store = configureStore({
  reducer: {
    burgerSlice: BurgerReducer,
    booksSlice: BooksReducer,
    bookSlice: BookReducer,
    categoriesSlice: CategoriesReducer,
  },
});
