import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBurgerSlice } from '../interfaces/interfaces';

const initialState: IBurgerSlice = {
  isBurgerOpen: false,
  isRatesOpen: false,
  isSearchOpen: false,
  isMenuOpen: true,
};
const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changeBurgerStatus: (state, action: PayloadAction<boolean>) => {
      state.isBurgerOpen = action.payload;
    },
    changeRatesStatus: (state, action: PayloadAction<boolean>) => {
      state.isRatesOpen = action.payload;
    },
    changeSearchStatus: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload;
    },
    menuToggle: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { changeBurgerStatus, changeRatesStatus, changeSearchStatus, menuToggle } = burgerSlice.actions;
export const { reducer: BurgerReducer } = burgerSlice;
