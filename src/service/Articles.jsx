import axios from "./api";

const Articles = {
  async getArticles(){
    const response = await axios.get("/articles");
    return response
  },
  async getArticleDetails(slug){
    const response = await axios.get(`/articles/${slug}`)
    return response
  }
};

export default Articles;
