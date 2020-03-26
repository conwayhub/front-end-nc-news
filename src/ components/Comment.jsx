import React from "react";
import VotesComponent from "./VotesComponents";
import DeleteButton from "./DeleteButton";

class CommentCard extends React.Component {
  state = { deleted: false };

  setAsDeleted = () => {
    this.setState({ deleted: true });
  };

  render() {
    const { deleted } = this.state;
    const { user, comment } = this.props;
    const { author, body, votes, comment_id } = comment;

    return deleted === true ? (
      <p>Comment Deleted :)</p>
    ) : (
      <li>
        <p>
          <b>User: </b> {author}
        </p>
        <b>Comment:</b>
        <p>{body}</p>

        <>
          {user === author && (
            <DeleteButton setAsDeleted={this.setAsDeleted} id={comment_id} />
          )}
        </>
        <VotesComponent type="comments" id={comment_id} votes={votes} />
      </li>
    );
  }
}

export default CommentCard;
