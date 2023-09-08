import React from "react";
import Carousel from "react-bootstrap/Carousel";

const bCarousel = () => {
  return (
    <div className="mt-2">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./images/d2.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./images/d5.jpg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./images/d4.jpg"
            alt="third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default bCarousel;
