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
        error: false,
        user: ""
      });
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
    }
  }

  componentDidMount() {
    this.settingCommentArray();
  }

  render() {
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
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={this.props.user}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
