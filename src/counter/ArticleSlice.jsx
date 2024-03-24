import { createSlice } from "@reduxjs/toolkit";

export const ArticleSlice = createSlice({
  name: "articles",
  initialState: {
    isLoading: false,
    error: null,
    articles: [],
  },
  reducers: {
    getArticleStart: state => {
        state.isLoading = true
    },
    getArticleSuccess: (state, actions) => {
        state.isLoading = false;
        state.articles = actions.payload
    }
  }
})
export const { getArticleStart, getArticleSuccess } =
  ArticleSlice.actions;
export default ArticleSlice.reducer;