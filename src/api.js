import axios from "axios";

const instance = axios.create({
  baseURL: "https://conways-nc-news.herokuapp.com/api"
});

export const fetchArticles = topic => {
  return instance.get("/articles", { params: { topic } });
};
