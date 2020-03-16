import axios from "axios";

const instance = axios.create({
  baseURL: "https://conways-nc-news.herokuapp.com/api"
});

export const fetchArticles = () => {
  return instance.get("/articles");
};
