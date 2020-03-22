import React, { useState } from "react";
import foodsList from "../../foodData/foods";
import "../Foods/Foods.css";
import wrapBg from "../../images/wrapper-bg.png"
import { Row, Container, Col } from "react-bootstrap";
const Foods = () => {
  const [foods, setFoods] = useState(foodsList);
  const [selectedFoodCat, setSelectedFoodCat] = useState("breakfast");

  const selectedFoods = foods.filter(food => food.category === selectedFoodCat);

  return (
    <div className="wrapp" style={{ backgroundImage: `url(${wrapBg})` }}>
      <div className="tab-menu">
        <ul>
          <li onClick={() => setSelectedFoodCat("breakfast")}>breakfast</li>
          <li onClick={() => setSelectedFoodCat("lunch")}>lunch</li>
          <li onClick={() => setSelectedFoodCat("dinner")}>dinner</li>
        </ul>
      </div>

      <Container>
        <Row>
          {selectedFoods.map(food => (
            <Col md="4">
              <div className="singl-food-item">
                <img src={food.img} alt="" />
                <a href="">{food.name}</a>
                <p>{food.short}</p>
                <span>${food.price}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Foods;
