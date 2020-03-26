import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.jsx";
import SortByForm from "./SortByForm.jsx";
import Loading from "./Loading";
import Error from "./Error";
import styles from "./AllArticlesByTopic.module.css";

class AllArticles extends Component {
  state = { loading: true, articles: null, error: null, sort_by: null };

  handleSortSubmit = sortObject => {
    this.setState({ sort_by: sortObject });
  };

  getAllArticles = () => {
    const { sort_by } = this.state;

    let passingParams = {};
    if (this.props.topic) {
      passingParams.topic = this.props.topic;
    }
    if (sort_by !== null) {
      passingParams.sort_by = sort_by;
    }
    api
      .fetchArticles(passingParams)
      .then(res => {
        const { articles } = res.data;
        this.setState({ articles, loading: false, error: null });
      })
      .catch(err => {
        this.setState({ error: err.response });
      });
  };

  componentDidUpdate(oldProps, oldState) {
    const { sort_by } = this.state;

    if (oldProps.topic !== this.props.topic) {
      this.getAllArticles();
    } else if (oldState.sort_by !== sort_by) {
      this.getAllArticles();
    }
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    const { loading, error, articles } = this.state;

    return error ? (
      <Error error={this.state.error} />
    ) : loading ? (
      <Loading />
    ) : (
      <>
        <SortByForm handleSortSubmit={this.handleSortSubmit} />
        <ul className={styles.ul}>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }
}

export default AllArticles;
