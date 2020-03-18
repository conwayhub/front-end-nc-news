import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./ components/Header";
import Nav from "./ components/Nav";
import AllArticlesByTopic from "./ components/AllArticlesByTopic";
import ArticleById from "./ components/ArticleById";
import Error from "./ components/Error";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <AllArticlesByTopic path="/articles/*" />
        <AllArticlesByTopic path="/articles/topic/:topic" />
        <ArticleById path="/articles/id/:id" />
        <Error default />
      </Router>
    </div>
  );
}

export default App;
