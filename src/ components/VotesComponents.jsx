import React from "react";
import * as api from "../api";

class VotesComponent extends React.Component {
  state = { votes: 0 };

  changeVotes = num => {
    api.patchVotes(this.props.type, this.props.id, num);
    this.setState(currentState => {
      return { votes: currentState.votes + num };
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
          onClick={event => {
            this.handleClick(1);
          }}
        >
          Reward
        </button>
        <button
          onClick={event => {
            this.handleClick(-1);
          }}
        >
          Punish
        </button>
      </>
    );
  }
}

export default VotesComponent;
