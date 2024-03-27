import axios from "./api";

const Articles = {
  async getArticles(){
    const response = await axios.get("/articles");
    return response
  },
  async getArticleDetails(slug){
    const response = await axios.get(`/articles/${slug}`);
    return response.data
  },
  async postArticle(article){
    const response = await axios.post('/articles', {article})
    return response
  },
  async deleteArticle(slug){
    const response = await axios.delete(`/articles/${slug}`)
    return response.data
  }
};

export default Articles;
