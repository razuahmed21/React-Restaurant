import React from "react";
import beef from "../../images/beef.png";
import roll from "../../images/roll.png";
import banner from "../../images/bannerbackground.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-body">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-text">
          <h1> Best food waiting for your belly</h1>
          <div className="serach-form">
            <input id="searchBox" type="text" placeholder="Search food items" />
            <button>search</button>
          </div>
        </div>
        <div className="beef">
          <img src={beef} alt="" />
        </div>
        <div className="roll">
          <img src={roll} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
