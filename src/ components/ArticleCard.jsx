import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";

const ArticleCard = props => {
  const article = props.article;
  const string = "/articles/id/" + article.article_id;

  return (
    <li className={styles.Card}>
      <Link to={string} className={styles.link}>
        <h2>{article.title}</h2>
      </Link>
      <p>Written By: {article.author}</p>
      <p>
        <b>Topic:</b> {article.topic} <b>Comments:</b> {article.comment_count}{" "}
        <b>Votes:</b> {article.votes}
      </p>
    </li>
  );
};
export default ArticleCard;
