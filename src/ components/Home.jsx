import React from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to NC News</h1>
      <p>
        One part newsfilter, one part ode to the humble marquee. This site was
        built in react, onto a backend api that uses knex, express, and psql. It
        was built while I was a student at Northcoders Bootcamp, and if you'd
        like to know more about me, or see my other projects, please feel free
        to checkout my github linked below!
      </p>
      <a
        href="https://github.com/conwayhub"
        target="_blank"
        className={styles.link}
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="4x"
          className={styles.icon}
        />
      </a>
      <p>
        While you're here, please feel free to log in as any of the dummy users
        who've already posted comments and articles, leave a few comments, drop
        a few votes, and delete a few comments! But most of all, enjoy those
        marquees!
      </p>

      <p>Kisses, Conway x</p>
    </main>
  );
};

export default Home;
