import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <NavBar />
        <Switch>
          <Route path="/todos" exact>
            <ListTodo />
          </Route>
          <Route path="/about" exact>
            <AboutMe />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
