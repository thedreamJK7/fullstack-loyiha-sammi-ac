import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
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
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
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
