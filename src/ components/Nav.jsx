import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <ul>
      <Link to="/articles/">
        <li>Gimmie The Works Please.</li>
      </Link>
      <Link to="/articles/topic/football">
        <li>kick that ball long and tall</li>
      </Link>
      <Link to="/articles/topic/cooking">
        <li>Serve the great devourer</li>
      </Link>
      <Link to="/articles/topic/coding">
        <li>The Techno Bourgoirse In The Apocalyse</li>
      </Link>
    </ul>
  );
};

export default Nav;
