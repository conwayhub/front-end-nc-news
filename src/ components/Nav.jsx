import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <ul className={styles.navLinks}>
      <Link to="/articles/" className={styles.navButton}>
        <li>
          <FontAwesomeIcon icon="globe-americas" />
          <br />
          ONE EVERYTHING.
        </li>
      </Link>
      <Link to="/articles/topic/football" className={styles.navButton}>
        <li>
          <FontAwesomeIcon icon="futbol" />
          <br />
          KICK THE BALL LONG AND TALL
        </li>
      </Link>
      <Link to="/articles/topic/cooking" className={styles.navButton}>
        <li>
          <FontAwesomeIcon icon="pizza-slice" />
          <br />O HOW I HUNGER{" "}
        </li>
      </Link>
      <Link to="/articles/topic/coding" className={styles.navButton}>
        <li>
          <FontAwesomeIcon icon={["fab", "react"]} />
          <br />
          TECHNO BOURGOIS APOCALYPSE
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
