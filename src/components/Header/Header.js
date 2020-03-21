import React from "react";
import logo from "../../images/logo2.png";
import banner from "../../images/bannerbackground.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Row, Container, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="main-body">
      <div className="main-header">
        <Container>
          <Row>
            <Col xs="3" sm="4" md="3" lg="2">
              <div className="logo-area">
                <a href="">
                  <img src={logo} alt="" />
                </a>
              </div>
            </Col>
            <Col xs="9" sm="8" md="9" lg="10">
              <div className="main-menu">
                <ul>
                  <li>
                    <a href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                  </li>
                  <li>
                    <a href="">login</a>
                  </li>
                  <li className="subscribe-btn">
                    <a href="">sign up</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-text">
          <h1> Best food waiting for your belly</h1>
          <div className="serach-form">
          <input id="searchBox" type="text" placeholder="Search food items"/>
          <button>search</button>
          </div>
        </div>
      </div>
      <div className="tab-menu">
        <ul>
          <li>breakfast</li>
          <li>lunch</li>
          <li>dinner</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
