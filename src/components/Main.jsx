import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/loader";
import { useNavigate } from "react-router-dom";
import { getArticleStart, getArticleSuccess } from "../counter/ArticleSlice";
import Articles from "../service/Articles";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getArticles = async () => {
    dispatch(getArticleStart());
    try {
      const response = await Articles.getArticles();
      dispatch(getArticleSuccess(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  const deleteArticle = async (slug) => {
    try {
      await Articles.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        {isLoading ? <Loader /> : ""}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((item) => (
            <div className="col" key={item.id}>
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>{item.title}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/article/${item.slug}`)}
                      >
                        View
                      </button>
                      {isLoggedIn &&
                        user.user.username === item.author.username && (
                          <>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                navigate(`/edit-article/${item.slug}`)
                              }
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => deleteArticle(item.slug)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                    </div>
                    <small className="text-body-secondary text-capitalize">
                      {item.author.username}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
