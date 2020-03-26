import React from "react";
import * as api from "../api";
import Loading from "./Loading";
import Error from "./Error";
import CommentCard from "./Comment";

class CommentList extends React.Component {
  state = { commentArray: [], loading: true, error: null };

  settingCommentArray = () => {
    api
      .fetchCommentsByArticle(this.props.id)
      .then(res => {
        this.setState({
          commentArray: res.data.comments,
          loading: false,
          error: null,
          user: ""
        });
      })
      .catch(err => {
        this.setState({ error: err.response });
      });
  };
  componentDidUpdate(prevProps, prevState) {
    const { user } = this.props.user;
    if (prevProps.user !== user) {
      this.setState({ user: user });
    }
  }

  componentDidMount() {
    this.settingCommentArray();
  }

  render() {
    const { error, loading, commentArray } = this.state;
    const { user } = this.props;
    return error ? (
      <>
        <Error />
      </>
    ) : loading ? (
      <>
        <Loading />
      </>
    ) : (
      <ul>
        {commentArray.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={user}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
