import React from "react";
import * as api from "../api";
import styles from "./DeleteButton.module.css";

const DeleteButton = props => {
  const handleClick = event => {
    props.setAsDeleted();
    api.deleteComment(props.id);
  };

  return (
    <>
      <label>
        <button onClick={handleClick} className={styles.deleteButton}>
          <span role="img" aria-label="Red Cross Emoji">
            {" "}
            ❌
          </span>
        </button>{" "}
        Delete
      </label>
    </>
  );
};

export default DeleteButton;
