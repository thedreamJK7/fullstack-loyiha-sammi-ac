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
  },
});

// Action creators are generated for each case reducer function
export const { loginUserFailure, loginUserStart, loginUserSuccess } =
  counterSlice.actions;

export default counterSlice.reducer;
