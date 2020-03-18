import React from "react";
import * as api from "../api";
import Error from "./Error";
import Loading from "./Loading";
import ToggleButton from "./ToggleButton";
import CommentList from "./CommentList";

class ArticleById extends React.Component {
  state = { article: {}, loading: true, error: false };

  getArticle = () => {
    api
      .fetchArticleById(this.props.id)
      .then(res => {
        console.log(res.data.article, "response");
        this.setState({
          article: res.data.article,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };

  componentDidMount() {
    console.log("mounting");
    this.getArticle();
  }

  render() {
    console.log(this.state.article);
    let {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    return this.state.error === true ? (
      <>
        <Error />
      </>
    ) : this.state.loading === true ? (
      <>
        <Loading />
      </>
    ) : (
      <>
        <h1>{title}</h1>
        <b> Written by: </b> {author} <b> Published: </b> {created_at}
        <b> Topic: </b> {topic}
        <p>{body}</p>
        <ToggleButton component=" New Comment"></ToggleButton>
        <ToggleButton component=" All Comments">
          <CommentList id={this.props.id} />
        </ToggleButton>
      </>
    );
  }
}

export default ArticleById;
