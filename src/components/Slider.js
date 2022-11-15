import Carousel from "react-bootstrap/Carousel";

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style/slider.css";

const Slider = (props) => {
  return (
    <Carousel fade >
      {props.start.map((elem) => {
        return (
          <Carousel.Item>
            <img
              className="slider-img d-block w-100 "
              src={elem}
              alt="first slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
