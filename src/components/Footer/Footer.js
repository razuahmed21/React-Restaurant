import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo2 from "../../images/logo.png";
import payment from "../../images/payment.png";
import "../Footer/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <Col md="12" lg="4">
            <div className="single-footer-widget">
              <div className="footer-logo">
                <img src={logo2} alt="" />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsa, temporibus harum soluta eligendi illum natus vel dolorem
                odit corrupti ea nulla.
              </p>
            </div>
          </Col>
          <Col md="12" lg="8">
            <Row>
              <Col sm="6" md="4" lg="4">
                <div className="single-footer-widget">
                  <ul>
                    <li>
                      <a href="#">about online food</a>
                    </li>
                    <li>
                      <a href="#">read our blog</a>
                    </li>
                    <li>
                      <a href="#">sign up to delivery</a>
                    </li>
                    <li>
                      <a href="#">add your restaurant</a>
                    </li>
                    <li>
                      <a href="#">track your order</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" md="4" lg="4">
                <div className="single-footer-widget">
                  <ul>
                    <li>
                      <a href="#">about online food</a>
                    </li>
                    <li>
                      <a href="#">read our blog</a>
                    </li>
                    <li>
                      <a href="#">sign up to delivery</a>
                    </li>
                    <li>
                      <a href="#">add your restaurant</a>
                    </li>
                    <li>
                      <a href="#">track your order</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" md="4" lg="4">
                <div className="single-footer-widget">
                  <ul>
                    <li>
                      <a href="#">about online food</a>
                    </li>
                    <li>
                      <a href="#">read our blog</a>
                    </li>
                    <li>
                      <a href="#">sign up to delivery</a>
                    </li>
                    <li>
                      <a href="#">add your restaurant</a>
                    </li>
                    <li>
                      <a href="#">track your order</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="lower-footer">
          <Row>
            <Col lg="4" md="6">
              <div className="lower-footer-widget">
                <ul>
                  <li>
                    <a href="">privacy policy</a>
                  </li>
                  <li>
                    <a href=""> terms of use</a>
                  </li>
                  <li>
                    <a href="">pricing</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="copyright">
                <p>Copyright @2020 Red Onion Foods</p>
              </div>
            </Col>
            <Col lg="4" md="12">
              <div className="lower-footer-widget">
                <div className="payment-img">
                  <img src={payment} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
