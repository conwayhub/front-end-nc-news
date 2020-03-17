import React from "react";

const ArticleCard = props => {
  const article = props.article;
  return (
    <li>
      <h2>{article.title}</h2>
      <p>Written By: {article.author}</p>
      <p>
        <b>Topic:</b> {article.topic} <b>Comments:</b> {article.comment_count}{" "}
        <b>Votes:</b> {article.votes}
      </p>
    </li>
  );
};
export default ArticleCard;
