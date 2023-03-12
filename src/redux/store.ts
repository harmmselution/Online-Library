import { configureStore } from '@reduxjs/toolkit';
import { BooksReducer } from './books-slice';
import { BurgerReducer } from './burger-slice';
import { BookReducer } from './book-slice';
import { CategoriesReducer } from './categories-slice';
import { SortReducer } from './sort-slice';

export const store = configureStore({
  reducer: {
    burgerSlice: BurgerReducer,
    booksSlice: BooksReducer,
    bookSlice: BookReducer,
    categoriesSlice: CategoriesReducer,
    sortSlice: SortReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
