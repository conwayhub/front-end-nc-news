import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={styles.NcHeadLine}>News From The North...</h1>

      <div className={styles.cssmarquee}>
        <h2>Big Stories! Hot Goss! Secrets!</h2>
      </div>
    </>
  );
};

export default Header;
