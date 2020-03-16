import React from "react";
import "./App.css";
import Header from "./ components/Header";
import Nav from "./ components/Nav";
import AllArticles from "./ components/AllArticles";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <AllArticles />
    </div>
  );
}

export default App;
