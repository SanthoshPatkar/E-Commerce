import React from "react";
import "../CSS/home.css";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      {/* slider */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner_image"
            src="../images/amazon-banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 banner_image"
            src="../images/amazon-banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner_image"
            src="../images/amazon-banner1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* end slider  */}

      {/* items */}

      <div className="home_row"></div>
      <div className="home_row"></div>
      <div className="home_row"></div>
      <div className="home_row"></div>
    </div>
  );
}

export default Home;
