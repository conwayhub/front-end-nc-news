import React, { Component } from "react";

class SortByForm extends Component {
  state = { sort_by: null };

  handleChange = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.handleSortSubmit(this.state.sort_by);
        }}
      >
        Sort Articles By:
        <select onChange={this.handleChange} id="sort_by" name="sort_by">
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <button>Sort</button>
      </form>
    );
  }
}

export default SortByForm;

/* "author",
      "title",
      "article_id",
      "body",
      "topic",
      "created_at",
      "votes",
      "comment_count"*/
