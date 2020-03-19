import React from "react";
import * as api from "../api";
import VotesComponent from "./VotesComponents";
import Loading from "./Loading";
import DeleteButton from "./deleteButton";
import { render } from "@testing-library/react";

class CommentCard extends React.Component {
  state = { deleted: false };

  // changeVotes = num => {
  //   let route = ;
  //   api.patchVotes(route, num);
  //   this.setState(currentState => {
  //     return { votes: currentState.votes + num };
  //   });
  // };

  // const comment = props.comment;

  //all u need in state is deleted: true, move logic into line & use props.

  setAsDeleted = () => {
    this.setState({ deleted: true });
  };

  render() {
    const { author, body, votes, comment_id } = this.props.comment;

    console.log(this.state);
    return this.state.deleted === true ? (
      <p>Comment Deleted :)</p>
    ) : (
      <li>
        <p>
          <b>User: </b> {author}
        </p>
        <b>Comment:</b>
        <p>{body}</p>

        <>
          {this.props.user === this.props.comment.author && (
            <DeleteButton setAsDeleted={this.setAsDeleted} id={comment_id} />
          )}
        </>
        <VotesComponent type="comments" id={comment_id} votes={votes} />
      </li>
    );
  }
}

export default CommentCard;
