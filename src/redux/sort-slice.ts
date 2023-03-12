import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortType } from '../enums/enums';
import { ISortSlice } from '../interfaces/interfaces';

const initialState: ISortSlice = {
  sortType: SortType.DESC,
};

export const sortSlice = createSlice({
  name: 'sortByRating',
  initialState,
  reducers: {
    sortToggler: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { reducer: SortReducer } = sortSlice;
export const { sortToggler } = sortSlice.actions;
