import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleSlice from "../service/Articles";
import {
  getArticleDetailsStart,
  getArticleDetailFailure,
  getArticleDetailSuccess,
} from "../counter/ArticleSlice";
import { useDispatch } from "react-redux";

const Article = () => {
  const { slug } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticleDetailsStart())
    const getDataArticle = async () => {
      try { 
        const response = await ArticleSlice.getArticleDetails(slug);
        dispatch(getArticleDetailSuccess(response.data))
      } catch (error) {
        dispatch(getArticleDetailFailure(error))
      }
    };
    getDataArticle();
  }, [slug]);
  return <div>Article</div>;
};

export default Article;
