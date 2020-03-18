import React, { Component } from "react";
import * as api from "../api";
import Loading from "./Loading";
import Error from "./Error";
import CommentCard from "./Comment";

class CommentList extends React.Component {
  state = { commentArray: [], loading: true, error: false };

  settingCommentArray = () => {
    api.fetchCommentsByArticle(this.props.id).then(res => {
      this.setState({
        commentArray: res.data.comments,
        loading: false,
        error: false
      });
    });
  };

  componentDidMount() {
    this.settingCommentArray();
  }
  componentDidUpdate() {}

  render() {
    console.log(this.state);
    return this.state.error ? (
      <>
        <Error />
      </>
    ) : this.state.loading ? (
      <>
        <Loading />
      </>
    ) : (
      <ul>
        {this.state.commentArray.map(comment => {
          return <CommentCard comment={comment} />;
        })}
      </ul>
    );
  }
}

export default CommentList;
