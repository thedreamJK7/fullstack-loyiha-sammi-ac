import { createSlice } from "@reduxjs/toolkit";

export const ArticleSlice = createSlice({
  name: "articles",
  initialState: {
    isLoading: false,
    error: null,
    article: null,
    articles: [],
  },
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, actions) => {
      state.isLoading = false;
      state.articles = actions.payload;
    },
    getArticleDetailsStart: (state, actions) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, actions) => {
      state.article = actions.payload;
      state.isLoading = false;
    },
    getArticleDetailFailure: (state, actions) => {
      state.error = actions.payload;
    },
    postArticleStart: (state) => {
      state.isLoading = true
    },
    postArticleSuccess: (state, actions) => {
      state.isLoading = false;
    },
    postArticleFailure: (state, actions) => {
      state.error = 'error'
    }
  },
});
export const {
  getArticleStart,
  getArticleSuccess,
  getArticleDetailFailure,
  getArticleDetailSuccess,
  getArticleDetailsStart,
  postArticleFailure,
  postArticleSuccess,
  postArticleStart
} = ArticleSlice.actions;
export default ArticleSlice.reducer;
