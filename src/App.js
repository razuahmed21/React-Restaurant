import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Breakfast from "./components/Breakfast/Breakfast";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Breakfast></Breakfast>
    </div>
  );
}

export default App;
