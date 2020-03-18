import React from "react";
import * as api from "../api";

class VotesComponent extends React.Component {
  state = { votes: 0 };

  changeVotes = num => {
    const route = this.props.route;
    api.patchVotes(route, num);
    this.setState(currentState => {
      return { votes: currentState.votes + num };
    });
  };

  handleClick = num => {
    this.changeVotes(num);
  };
  render() {
    console.log(this.props);
    return (
      <p>
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
      </p>
    );
  }
}

export default VotesComponent;
