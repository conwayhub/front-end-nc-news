import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingBody}>
      <h3>Loading</h3>
      &emsp;
      <FontAwesomeIcon icon="cog" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="coffee" size="4x" spin />
      &emsp;
      <FontAwesomeIcon icon="cog" size="4x" spin />
      <p>Relax, grab a coffee, the news is on it's way...</p>
    </div>
  );
};

export default Loading;
