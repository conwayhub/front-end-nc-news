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
  faPizzaSlice,
  faFutbol,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPizzaSlice, faFutbol, faGlobeAmericas);

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
    return (
      <div>
        {this.state.user === "" && <LoginForm setUser={this.setUser} />}
        {this.state.user && (
          <p>
            <img alt="user avatar" src={this.state.user.avatar_url} />
            Hi {this.state.user.name}, you are logged in!{" "}
            <button onClick={this.handleLogOut}>Log out</button>
          </p>
        )}
        <Header className="header" />
        <Nav />
        <Router>
          <AllArticlesByTopic path="/articles/" />
          <AllArticlesByTopic path="/articles/*" />
          <AllArticlesByTopic path="/articles/topic/:topic" />
          <ArticleById
            path="/articles/id/:id"
            user={this.state.user.username}
          />
          <Error default />
        </Router>
      </div>
    );
  }
}
export default App;
