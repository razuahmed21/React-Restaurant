import React from "react";
import imgErr from "../../images/404.jpg";
import "../NoMatch/NoMatch.css";
const NoMatch = () => {
  return (
    <div className="E404">
      <img src={imgErr} alt="" />
    </div>
  );
};

export default NoMatch;
