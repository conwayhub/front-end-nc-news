import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <ul className={styles.navLinks}>
      <Link to="/articles/">
        <FontAwesomeIcon icon="globe-americas" />
        <li className={styles.navButton}>Gimmie The Works Please.</li>
      </Link>
      <Link to="/articles/topic/football">
        <FontAwesomeIcon icon="futbol" />
        <li className={styles.navButton}> kick that ball long and tall</li>
      </Link>
      <Link to="/articles/topic/cooking">
        <FontAwesomeIcon icon="pizza-slice" />{" "}
        <li className={styles.navButton}>Serve the great devourer</li>
      </Link>
      <Link to="/articles/topic/coding">
        <FontAwesomeIcon icon={["fab", "react"]} />{" "}
        <li className={styles.navButton}>
          The Techno Bourgoirse In The Apocalyse
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
