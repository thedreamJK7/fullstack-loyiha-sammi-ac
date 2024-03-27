import React, { useState } from "react";
import FormArticle from "./FormArticle";
import Articles from "../service/Articles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postArticleFailure, postArticleSuccess, postArticleStart } from '../counter/ArticleSlice'

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getSubmitAsync = async (e) => {
    e.preventDefault();
    const article = {title, description, body}
    dispatch(postArticleStart())
    try {
        dispatch(postArticleSuccess())
        const response = await Articles.postArticle(article);
        navigate('/')
        console.log(response);
    } catch (error) {
        dispatch(postArticleFailure())
    }
  }
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
      <h1 className="fs-2">Create article</h1>
      <div className="w-75 mx-auto">
        <FormArticle props={{...formProps}} />
      </div>
    </div>
  );
};

export default CreateArticle;
