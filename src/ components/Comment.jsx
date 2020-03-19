import React from "react";
import * as api from "../api";
import VotesComponent from "./VotesComponents";
import Loading from "./Loading";
import DeleteButton from "./deleteButton";
import { render } from "@testing-library/react";

class CommentCard extends React.Component {
  state = { loading: true, user: "", showdelete: true, deleted: false };

  // changeVotes = num => {
  //   let route = ;
  //   api.patchVotes(route, num);
  //   this.setState(currentState => {
  //     return { votes: currentState.votes + num };
  //   });
  // };

  // const comment = props.comment;

  setCommentData() {
    this.setState({
      ...this.props.comment,
      loading: false,
      deleted: false,
      user: this.props.user,
      showdelete: this.props.user === this.props.comment.author
    });
  }

  setAsDeleted = () => {
    this.setState({ deleted: true });
  };

  componentDidMount() {
    this.setCommentData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setCommentData();
    }
  }

  render() {
    console.log(this.state);
    return this.state.deleted === true ? (
      <p>Comment Deleted :)</p>
    ) : this.state.loading === true ? (
      <Loading />
    ) : (
      <li>
        <p>
          <b>User: </b> {this.state.author}
        </p>
        <b>Comment:</b>
        <p>{this.state.body}</p>

        <>
          {this.state.showdelete && (
            <DeleteButton
              setAsDeleted={this.setAsDeleted}
              id={this.state.comment_id}
            />
          )}
        </>
        <VotesComponent
          route={`/comments/${this.state.comment_id}`}
          votes={this.state.votes}
        />
      </li>
    );
  }
}

export default CommentCard;
