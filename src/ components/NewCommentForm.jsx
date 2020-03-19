import React from "react";
import CommentCard from "./Comment";
import * as api from "../api";

class NewCommentForm extends React.Component {
  state = { loading: true, error: null, comment: "", posted: null };

  handleSubmit = event => {
    event.preventDefault();

    api
      .postComment(this.props.article_id, this.props.user, this.state.comment)
      .catch(err => {
        console.dir(err);
        this.setState({ error: err });
      });

    this.setState(currentState => {
      return {
        posted: currentState.comment,
        comment: ""
      };
    });
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return this.props.user === undefined ? (
      <h3>Hi Guest! Log in to post a comment</h3>
    ) : (
      <>
        <h3>Post a new comment</h3>{" "}
        <p>Hi, {this.props.user}! Want to post a comment?</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input
              type="text"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </label>
        </form>
        {this.state.posted && (
          <>
            <p>Great! Comment Posted!</p>
            <ul>
              <li>
                <p>
                  <b>User: </b> {this.props.user}
                </p>
                <b>Comment:</b>
                <p>{this.state.posted}</p>
                <b>Votes: </b>0
              </li>
            </ul>
          </>
        )}
      </>
    );
  }
}

export default NewCommentForm;
