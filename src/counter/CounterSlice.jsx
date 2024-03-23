import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistnce-storage";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    error: null,
    user: null,
  },
  reducers: {
    signStart: (state, actions) => {
      state.isLoading = true;
    },
    signSuccess: (state, actions) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = actions.payload;
      setItem('token', actions.payload.user.token)
    },
    signFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  signStart, signSuccess, signFailure
} = counterSlice.actions;

export default counterSlice.reducer;
