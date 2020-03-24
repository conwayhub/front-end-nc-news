import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.jsx";
import SortByForm from "./SortByForm.jsx";
import Loading from "./Loading";
import Error from "./Error";

class AllArticles extends Component {
  state = { loading: true, articles: null, error: null, sort_by: null };

  handleSortSubmit = sortObject => {
    this.setState({ sort_by: sortObject });
  };

  getAllArticles = () => {
    let passingParams = {};
    if (this.props.topic !== undefined) {
      passingParams.topic = this.props.topic;
    }
    if (this.state.sort_by !== null) {
      passingParams.sort_by = this.state.sort_by;
    }
    api
      .fetchArticles(passingParams)
      .then(res => {
        console.log("your articles, maam", res.data.articles[0]);
        const { articles } = res.data;
        this.setState({ articles, loading: false, error: null });
      })
      .catch(err => {
        this.setState({ error: err.response });
      });
  };

  componentDidUpdate(oldProps, oldState) {
    if (oldProps.topic !== this.props.topic) {
      this.getAllArticles();
    } else if (oldState.sort_by !== this.state.sort_by) {
      this.getAllArticles();
    }
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return this.state.error ? (
      <Error error={this.state.error} />
    ) : this.state.loading ? (
      <Loading />
    ) : (
      <>
        <SortByForm handleSortSubmit={this.handleSortSubmit} />
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }
}

export default AllArticles;
