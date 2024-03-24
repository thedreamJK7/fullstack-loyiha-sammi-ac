import axios from "./api";

const Articles = {
  async getArticles(){
    const response = await axios.get("/articles");
    return response
  }
};

export default Articles;
