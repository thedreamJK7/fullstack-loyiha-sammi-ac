import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleSlice from "../service/Articles";
import Jude from "../assets/1330842095249.jpg"
import {
  getArticleDetailsStart,
  getArticleDetailFailure,
  getArticleDetailSuccess,
} from "../counter/ArticleSlice";
import { useDispatch, useSelector} from "react-redux";
const Article = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleDetailsStart());
    const getDataArticle = async () => {
      try {
        const response = await ArticleSlice.getArticleDetails(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure(error));
      }
    };
    getDataArticle();
  }, [slug]);
  const { article } = useSelector((state) => state.articles);

  return (
    article !== null && <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Jude}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bold text-body-emphasis lh-1 mb-3">
            {article.title}
          </h1>
          <p className="lead">
            { article.description }
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
