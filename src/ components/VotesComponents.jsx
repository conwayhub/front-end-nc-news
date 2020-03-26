import React from "react";
import * as api from "../api";
import styles from "./VotesComponent.module.css";

class VotesComponent extends React.Component {
  state = { votes: 0 };

  changeVotes = num => {
    const { type, id } = this.props;
    api.patchVotes(type, id, num);
    this.setState(currentState => {
      return { votes: currentState.votes + num, disabled: true };
    });
  };

  handleClick = num => {
    this.changeVotes(num);
  };
  render() {
    const { votes, disabled } = this.state;
    return (
      <>
        <p>
          <b>Votes: </b>
          {votes + this.props.votes}
        </p>

        <button
          className={styles.upVote}
          onClick={event => {
            this.handleClick(1);
          }}
          disabled={disabled}
        >
          <span role="img" aria-label="Red Heart Emoji">
            ❤️
          </span>
        </button>
        <button
          className={styles.downVote}
          onClick={event => {
            this.handleClick(-1);
          }}
          disabled={disabled}
        >
          <span role="img" aria-label="Skull Emoji">
            💀
          </span>
        </button>
      </>
    );
  }
}

export default VotesComponent;
