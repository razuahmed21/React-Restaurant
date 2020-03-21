import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import foods from "../../foodData/foods";
const Breakfast = () => {
  const khabar = foods.slice(0,6);
  const { img, name, price, short } = khabar;
  console.log(khabar)
  return (
    <div className="breakfast-area">
      <Container>
        <Row>
          <Col md="4">
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{short}</h1>
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breakfast;
