import React, { Component } from "react";
import styles from "./SortByForm.module.css";

class SortByForm extends Component {
  state = { sort_by: null };

  handleChange = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  render() {
    const { handleSortSubmit } = this.props;
    const { sort_by } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={event => {
          event.preventDefault();
          handleSortSubmit(sort_by);
        }}
      >
        Sort Articles By:&emsp;
        <select onChange={this.handleChange} id="sort_by" name="sort_by">
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        &emsp;
        <button>SORT</button>
      </form>
    );
  }
}

export default SortByForm;
