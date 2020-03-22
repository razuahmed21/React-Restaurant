import React from "react";
import logo from "../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Row, Container, Col } from "react-bootstrap";
import "../Menu/Menu.css";
const Menu = () => {
  return (
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
                  <a href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </li>
                <li>
                  <a href="/login">login</a>
                </li>
                <li className="subscribe-btn">
                  <a href="/signup">sign up</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
