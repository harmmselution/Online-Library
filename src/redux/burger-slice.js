import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerOpen: false,
  isRatesOpen: false,
  isSearchOpen: false,
  isMenuOpen: true,
  burgerState: false,
};
const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changeBurgerStatus: (state, action) => {
      const st = state;
      st.isBurgerOpen = action.payload;
    },
    changeRatesStatus: (state, action) => {
      const st = state;
      st.isRatesOpen = action.payload;
    },
    changeSearchStatus: (state, action) => {
      const st = state;
      st.isSearchOpen = action.payload;
    },
    menuToggle: (state, action) => {
      const st = state;
      st.isMenuOpen = action.payload;
    },
    burgerToggle: (state, action) => {
      const st = state;

      st.burgerState = action.payload;
    },
  },
});

export const { changeBurgerStatus, changeRatesStatus, changeSearchStatus, menuToggle, burgerToggle } =
  burgerSlice.actions;
export const { reducer: BurgerReducer } = burgerSlice;
