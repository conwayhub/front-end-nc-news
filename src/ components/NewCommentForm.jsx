import React from "react";
import * as api from "../api";
import styles from "./NewCommentForm.module.css";
import VotesComponent from "./VotesComponents";

class NewCommentForm extends React.Component {
  state = {
    loading: true,
    error: null,
    comment: "",
    posted: null,
    unposted: false,
    comment_id: null
  };

  handleSubmit = event => {
    const { article_id, user } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    if (comment === "") {
      this.setState({ unposted: true });
    } else {
      api
        .postComment(article_id, user, comment)
        .then(res => {
          const { comment_id } = res.data.comment;
          this.setState({ comment_id });
        })

        .catch(err => {
          console.dir(err);
          this.setState({ error: err });
        });

      this.setState(currentState => {
        return {
          unposted: false,
          posted: currentState.comment,
          comment: ""
        };
      });
    }
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { user } = this.props;
    const { comment, unposted, posted, comment_id } = this.state;
    return user === undefined ? (
      <h3>Hi Guest! Log in to post a comment</h3>
    ) : (
      <>
        <h3>Post a new comment</h3> <p>Hi, {user}! Want to post a comment?</p>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            <textarea rows="5" value={comment} onChange={this.handleChange} />
            <br />
            <button>Submit</button>
          </label>
        </form>
        {unposted && <p>No comment entered!</p>}
        {posted && (
          <>
            <p>Great! Comment Posted!</p>
            <ul>
              <li>
                <p>
                  <b>User: </b> {user}
                </p>
                <b>Comment:</b>
                <p>{posted}</p>
                <VotesComponent type="comments" id={comment_id} votes={0} />
              </li>
            </ul>
          </>
        )}
      </>
    );
  }
}

export default NewCommentForm;
