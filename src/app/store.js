import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../counter/CounterSlice";
import ArticleSlice from "../counter/ArticleSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    articles: ArticleSlice
  },
});
