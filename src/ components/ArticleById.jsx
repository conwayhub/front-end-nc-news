import React from "react";
import * as api from "../api";
import Error from "./Error";
import Loading from "./Loading";
import ToggleButton from "./ToggleButton";
import CommentList from "./CommentList";
import VotesComponent from "./VotesComponents";
import NewCommentForm from "./NewCommentForm";

class ArticleById extends React.Component {
  state = { article: {}, loading: true, error: null };

  getArticle = () => {
    api
      .fetchArticleById(this.props.id)
      .then(res => {
        this.setState({
          article: res.data.article,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: err.response });
      });
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    const { error, loading } = this.state;
    const { user, id } = this.props;

    return error ? (
      <>
        <Error error={error} />
      </>
    ) : loading === true ? (
      <>
        <Loading />
      </>
    ) : (
      <>
        <h1>{title}</h1>
        <b> Written by: </b> {author} <b> Published: </b> {created_at}
        <b> Topic: </b> {topic}
        <p>{body}</p>
        <p>
          <b>Comments:</b> {comment_count}
        </p>
        <VotesComponent type="articles" id={article_id} votes={votes} />
        <ToggleButton component=" New Comment">
          <NewCommentForm user={user} article_id={article_id} />
        </ToggleButton>
        <ToggleButton component=" All Comments">
          <CommentList id={id} user={user} />
        </ToggleButton>
      </>
    );
  }
}

export default ArticleById;
