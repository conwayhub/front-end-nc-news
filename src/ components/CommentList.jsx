import React from "react";
import * as api from "../api";
import Loading from "./Loading";
import Error from "./Error";
import CommentCard from "./Comment";
import styles from "./CommentList.module.css";

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
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
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
      <ul className={styles.List}>
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
