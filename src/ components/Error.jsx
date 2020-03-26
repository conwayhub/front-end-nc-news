import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return error === undefined ? (
    <div className={styles.errorBody}>
      <h3> ERROR 404!</h3>
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <p>
        Alas! It looks like we have a Page does not exist error on our hands!
      </p>
    </div>
  ) : (
    <div className={styles.errorBody}>
      <h3>ERROR {error.status} !</h3>
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="skull" size="4x" spin />
      &emsp;
      <p>
        Alas, it looks like we have a {error.data.msg} situation on our hands!
      </p>
    </div>
  );
};

export default Error;
