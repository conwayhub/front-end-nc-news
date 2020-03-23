import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={styles.NcHeadLine}>NEWS FROM THE NORTH...</h1>

      <div className={styles.cssmarquee}>
        <h2>Big Stories! Hot Goss! Secrets!</h2>
      </div>
    </>
  );
};

export default Header;
