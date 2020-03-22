import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";
// import Breakfast from "./components/Breakfast/Breakfast";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Foods></Foods>
    </div>
  );
}

export default App;
