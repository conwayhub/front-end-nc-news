import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.navLinks}>
      <Link to="/articles/">
        <li className={styles.navButton}>Gimmie The Works Please.</li>
      </Link>
      <Link to="/articles/topic/football">
        <li className={styles.navButton}>kick that ball long and tall</li>
      </Link>
      <Link to="/articles/topic/cooking">
        <li className={styles.navButton}>Serve the great devourer</li>
      </Link>
      <Link to="/articles/topic/coding">
        <li className={styles.navButton}>
          The Techno Bourgoirse In The Apocalyse
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
