import React from "react";
import { Link } from "@reach/router";

const CommentCard = props => {
  const comment = props.comment;
  return (
    <li>
      <p>
        <b>User:</b> {comment.author},<b>Comment:</b>
        {comment.body}
      </p>
    </li>
  );
};

export default CommentCard;
