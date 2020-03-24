import React from "react";
import * as api from "../api";

const DeleteButton = props => {
  const handleClick = event => {
    props.setAsDeleted();
    api.deleteComment(props.id);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
