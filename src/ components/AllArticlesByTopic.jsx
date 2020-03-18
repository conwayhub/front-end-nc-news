import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard.jsx";
import SortByForm from "./sortByForm.jsx";

class AllArticles extends Component {
  state = { loading: true, articles: null };

  handleSortSubmit = sortObject => {
    console.log(this.props, "before");
    this.setState({ sort_by: sortObject });
    this.getAllArticles();
  };

  getAllArticles = () => {
    let passingParams = {};
    if (this.props.topic !== undefined) {
      passingParams.topic = this.props.topic;
    }
    if (this.state.sort_by !== undefined) {
      passingParams.sort_by = this.state.sort_by;
    }
    api.fetchArticles(passingParams).then(res => {
      const { articles } = res.data;
      this.setState({ articles, loading: false });
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
    return this.state.loading === true ? (
      <p>Leave me be, I'm Loading!</p>
    ) : (
      <ul>
        <SortByForm handleSortSubmit={this.handleSortSubmit} />
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }
}

export default AllArticles;
