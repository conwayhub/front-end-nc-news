import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./ components/Header";
import Nav from "./ components/Nav";
import AllArticles from "./ components/AllArticles";
import AllArticlesByTopic from "./ components/AllArticlesByTopic";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <AllArticlesByTopic path="/articles/*" />
        <AllArticlesByTopic path="/articles/topic/:topic" />
      </Router>
    </div>
  );
}

export default App;
