import React from "react";
import "../CSS/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      {/* slider */}
      <img className="banner_image" src="../images/amazon-banner1.jpg" alt="" />
      {/* end slider  */}

      {/* items */}

      <div className="home_row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home_row">
        <Product />
        <Product />
        <Product />.
      </div>
      <div className="home_row"></div>
      <div className="home_row"></div>
    </div>
  );
}

export default Home;
