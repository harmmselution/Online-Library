import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortType: 'DESC',
};

export const sortSlice = createSlice({
  name: 'sortByRating',
  initialState,
  reducers: {
    sortToggler: (state, action) => {
      const st = state;
      st.sortType = action.payload;
    },
  },
});

export const { reducer: SortReducer } = sortSlice;
export const { sortToggler } = sortSlice.actions;
