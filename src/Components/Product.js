import React from "react";
import "../CSS/product.css";
import { Link } from "react-router-dom";

function Product({ info, img, link }) {
  return (
    <div className="product">
      <div className="product_info">
        <h2>{info}</h2>
      </div>
      <img src={img} alt="" />
      <Link to={link}>
        <p>see more..</p>
      </Link>
    </div>
  );
}

export default Product;
