import React from "react";
import choosePic1 from "../../images/choose1.png";
import choosePic2 from "../../images/choose2.png";
import choosePic3 from "../../images/choose3.png";
import "../Choose/Choose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faArrowRight,
  faBell,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import { Row, Container, Col } from "react-bootstrap";
const Choose = () => {
  return (
    <div className="choose-wrap">
      <Container>
        <Row>
          <Col sm="6" md="6" lg="4">
            <div className="single-choose">
              <div className="choose-img">
                <img src={choosePic1} alt="" />
              </div>
              <div className="choose-content">
                <h4>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faCaravan} />
                  </span>{" "}
                  fast delivery
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, corporis?
                </p>
                <a href="#">
                  See more{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </Col>
          <Col sm="6" md="6" lg="4">
            <div className="single-choose">
              <div className="choose-img">
                <img src={choosePic2} alt="" />
              </div>
              <div className="choose-content">
                <h4>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faBell} />
                  </span>{" "}
                  good auto respond
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, corporis?
                </p>
                <a href="#">
                  See more{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </Col>
          <Col sm="6" md="6" lg="4">
            <div className="single-choose">
              <div className="choose-img">
                <img src={choosePic3} alt="" />
              </div>
              <div className="choose-content">
                <h4>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faCar} />
                  </span>{" "}
                  home delivery
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, corporis?
                </p>
                <a href="#">
                  See more{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Choose;
