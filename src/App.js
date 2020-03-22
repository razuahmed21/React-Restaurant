import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Menu from "./components/Menu/Menu";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firbase.config";
firebase.initializeApp(firebaseConfig);

// import Breakfast from "./components/Breakfast/Breakfast";

function App() {
  return (
    <div className="wrapper">
      <Menu></Menu>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Foods></Foods>
            <Choose></Choose>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
