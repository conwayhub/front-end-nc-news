import React from "react";
import * as api from "../api";
import styles from "./VotesComponent.module.css";

class VotesComponent extends React.Component {
  state = { votes: 0 };

  changeVotes = num => {
    api.patchVotes(this.props.type, this.props.id, num);
    this.setState(currentState => {
      return { votes: currentState.votes + num, disabled: true };
    });
  };

  handleClick = num => {
    this.changeVotes(num);
  };
  render() {
    return (
      <>
        <p>
          <b>Votes: </b>
          {this.state.votes + this.props.votes}
        </p>

        <button
          className={styles.upVote}
          onClick={event => {
            this.handleClick(1);
          }}
          disabled={this.state.disabled}
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
          disabled={this.state.disabled}
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
