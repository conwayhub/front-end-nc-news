import axios from "axios";

const instance = axios.create({
  baseURL: "https://conways-nc-news.herokuapp.com/api"
});

export const fetchArticles = params => {
  console.log(params);
  return instance.get("/articles", { params });
};

export const fetchArticleById = article_id => {
  return instance.get(`/articles/${article_id}`);
};

export const fetchCommentsByArticle = article_id => {
  return instance.get(`/articles/${article_id}/comments`);
};

export const patchVotes = (type, id, num) => {
  return instance.patch(`/${type}/${id}`, { inc_votes: num });
};

export const deleteComment = comment_id => {
  return instance.delete(`/comments/${comment_id}`);
};

export const checkUser = username => {
  return instance.get(`users/${username}`);
};

export const postComment = (article_id, username, body) => {
  return instance.post(`/articles/${article_id}/comments`, {
    username: username,
    body: body
  });
};
