import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.jsx";
import SortByForm from "./sortByForm.jsx";

class AllArticles extends Component {
  state = { loading: true, articles: null };

  getAllArticles = () => {
    let passingParams = {};
    if (this.props.topic !== undefined) {
      passingParams.topic = this.props.topic;
    }
    if (this.props.sort_by !== undefined) {
      passingParams.sort_by = this.props.sort_by;
    }
    api.fetchArticles(passingParams).then(res => {
      const { articles } = res.data;
      this.setState({ articles, loading: false });
    });
  };

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
        <SortByForm />
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }
}

export default AllArticles;
