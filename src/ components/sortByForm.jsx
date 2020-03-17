import React, { Component } from "react";

class SortByForm extends Component {
  state = { sort: null };

  render() {
    return (
      <form>
        Sort Articles By:{" "}
        <select id="sort_by" name="sort_by">
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
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
