import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../counter/CounterSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer
  },
});
