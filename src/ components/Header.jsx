import React from "react";
import styles from "./Header.module.css";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <>
      <Link to="/" className={styles.link}>
        <h1 className={styles.NcHeadLine}>NEWS FROM THE NORTH...</h1>
      </Link>

      <div className={styles.cssmarquee}>
        <h2>Big Stories! Hot Goss! Secrets!</h2>
      </div>
    </>
  );
};

export default Header;
