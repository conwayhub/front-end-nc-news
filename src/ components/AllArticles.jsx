import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.jsx";
import SortByForm from "./sortByForm";

class AllArticles extends Component {
  state = { loading: true, articles: null };

  getAllArticles = () => {
    api.fetchArticles().then(res => {
      const { articles } = res.data;
      this.setState({ articles, loading: false });
    });
  };

  handleSortSubmit = () => {};

  componentDidUpdate(oldProps, oldState) {
    if (oldProps.topic !== this.props.topic) {
      this.getAllArticles();
    }
  }
  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return this.state.loading === true ? (
      <p>Leave me be, I'm Loading!</p>
    ) : (
      <ul>
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }
}

export default AllArticles;
