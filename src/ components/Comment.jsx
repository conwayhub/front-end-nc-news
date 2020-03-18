import React from "react";
import * as api from "../api";
import VotesComponent from "./VotesComponents";

class CommentCard extends React.Component {
  state = { ...this.props.comment };

  // changeVotes = num => {
  //   let route = ;
  //   api.patchVotes(route, num);
  //   this.setState(currentState => {
  //     return { votes: currentState.votes + num };
  //   });
  // };

  // const comment = props.comment;
  render() {
    console.log(this.state);
    return (
      <li>
        <p>
          <b>User: </b> {this.state.author}
        </p>
        <b>Comment:</b>
        <p>{this.state.body}</p>

        <VotesComponent
          route={`/comments/${this.state.comment_id}`}
          votes={this.state.votes}
        />
      </li>
    );
  }
}

export default CommentCard;
