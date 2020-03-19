import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./ components/Header";
import Nav from "./ components/Nav";
import AllArticlesByTopic from "./ components/AllArticlesByTopic";
import ArticleById from "./ components/ArticleById";
import Error from "./ components/Error";
import LoginForm from "./ components/LoginForm";

class App extends React.Component {
  state = { user: "" };

  setUser = user => {
    this.setState({ user });
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
            Hi {this.state.user}, you are logged in!{" "}
            <button onClick={this.handleLogOut}>Log out</button>
          </p>
        )}
        <Header />
        <Nav />
        <Router>
          <AllArticlesByTopic path="/articles/*" />
          <AllArticlesByTopic path="/articles/topic/:topic" />
          <ArticleById path="/articles/id/:id" user={this.state.user} />
          <Error default />
        </Router>
      </div>
    );
  }
}
export default App;
