import React from "react";
import VotesComponent from "./VotesComponents";
import DeleteButton from "./DeleteButton";

class CommentCard extends React.Component {
  state = { deleted: false };

  setAsDeleted = () => {
    this.setState({ deleted: true });
  };

  render() {
    const { author, body, votes, comment_id } = this.props.comment;

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
