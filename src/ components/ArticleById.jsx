import React from "react";
import * as api from "../api";
import Error from "./Error";
import Loading from "./Loading";
import ToggleButton from "./ToggleButton";
import CommentList from "./CommentList";
import VotesComponent from "./VotesComponents";
import NewCommentForm from "./NewCommentForm";

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

  changeVotes = num => {
    let route = `/articles/${this.state.article.article_id}`;
    api.patchVotes(route, num);
    this.setState(currentState => {
      return {
        article: {
          ...currentState.article,
          votes: currentState.article.votes + num
        }
      };
    });
  };

  // componentDidUpdate(oldProps, oldState) {
  //   if (oldState.votes !== this.state.votes) {
  //     this.getArticle();
  //   }
  // }

  componentDidMount() {
    console.log("mounting");
    this.getArticle();
  }

  render() {
    console.log(this.state.article.article_id);
    let {
      article_id,
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
        <p>
          <b>Comments:</b> {comment_count}
        </p>
        <VotesComponent route={`/articles/${article_id}`} votes={votes} />
        <ToggleButton component=" New Comment">
          <NewCommentForm />
        </ToggleButton>
        <ToggleButton component=" All Comments">
          <CommentList id={this.props.id} />
        </ToggleButton>
      </>
    );
  }
}

export default ArticleById;
