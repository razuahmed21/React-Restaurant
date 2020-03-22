import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Foods from "./components/Foods/Foods";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";
// import Breakfast from "./components/Breakfast/Breakfast";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Foods></Foods>
      <Choose></Choose>
      <Footer></Footer>
    </div>
  );
}

export default App;
