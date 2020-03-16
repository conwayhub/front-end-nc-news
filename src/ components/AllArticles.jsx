import React, { Component } from "react";
import * as api from "../api";

class AllArticles extends Component {
  state = { loading: true, articles: null };

  getAllArticles = () => {
    api.fetchArticles().then(res => {
      const { articles } = res.data;
      this.setState({ articles, loading: false });
    });
  };

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    console.log(this.state.articles);
    return this.state.loading === true ? (
      <p>Leave me be, I'm Loading!</p>
    ) : (
      <ul>
        {this.state.articles.map(article => {
          return <li>{article.title}</li>;
        })}
        }
      </ul>
    );
  }
}

export default AllArticles;
