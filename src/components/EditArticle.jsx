import React, { useEffect, useState } from "react";
import FormArticle from "./FormArticle";
import Articles from "../service/Articles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../counter/ArticleSlice";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const slug = useParams()
  useEffect(()=> {
    const getArticleDetail = async () => {
      const response = await Articles.getArticleDetails(slug.slug);
      setTitle(response.article.title)
      setBody(response.article.body)
      setDescription(response.article.description)
    };
    getArticleDetail()
  }, [slug])
  const getSubmitAsync = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      dispatch(postArticleSuccess());
      const response = await Articles.putArticle(article, slug.slug);
      navigate("/");
      console.log(response);
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };
  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    getSubmitAsync
  };
  return (
    <div className="text-center">
      <h1 className="fs-2">Edit Article</h1>
      <div className="w-75 mx-auto">
        <FormArticle props={{ ...formProps }} />
      </div>
    </div>
  );
};

export default EditArticle;
