import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    error: null,
    user: null,
  },
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.error = 'error'
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginUserFailure,
  loginUserStart,
  loginUserSuccess,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = counterSlice.actions;

export default counterSlice.reducer;
