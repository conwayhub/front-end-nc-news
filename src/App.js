import React from "react";
import styles from "./App.module.css";
import { Router } from "@reach/router";
import Header from "./ components/Header";
import Nav from "./ components/Nav";
import AllArticlesByTopic from "./ components/AllArticlesByTopic";
import ArticleById from "./ components/ArticleById";
import Error from "./ components/Error";
import LoginForm from "./ components/LoginForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSkull,
  faPizzaSlice,
  faFutbol,
  faGlobeAmericas,
  faCoffee,
  faCog
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPizzaSlice,
  faFutbol,
  faGlobeAmericas,
  faCoffee,
  faCog,
  faSkull
);

class App extends React.Component {
  state = { user: "" };

  setUser = user => {
    this.setState({ user: user });
  };

  handleLogOut = event => {
    event.preventDefault();
    this.setState({ user: "" });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        {user === "" && <LoginForm setUser={this.setUser} />}
        {user && (
          <div className={styles.loggedIn}>
            <img alt="user avatar" src={user.avatar_url} />
            Hi {user.name}, you are logged in!{" "}
            <button onClick={this.handleLogOut}>LOG OUT</button>
          </div>
        )}
        <Header className="header" />
        <Nav />
        <Router>
          <AllArticlesByTopic path="/articles/" />
          <AllArticlesByTopic path="/articles/*" />
          <AllArticlesByTopic path="/articles/topic/:topic" />
          <ArticleById path="/articles/id/:id" user={user.username} />
          <Error default />
        </Router>
      </div>
    );
  }
}
export default App;
