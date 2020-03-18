import React from "react";

class NewCommentForm extends React.Component {
  state = { loading: true, error: false, user: "toots", comment: "" };
  render() {
    return this.state.user === null ? (
      <h3>Hi Guest! Log in to post a comment</h3>
    ) : (
      <>
        <h3>Post a new comment</h3>{" "}
        <p>Hi, {this.state.user}! Want to post a comment?</p>
        <form>
          <label>
            Comment:
            <input type="text" />
            <button>Submit</button>
          </label>
        </form>
      </>
    );
  }
}

export default NewCommentForm;
