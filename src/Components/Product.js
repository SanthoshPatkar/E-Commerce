import React from "react";
import "../CSS/product.css";

function Product({ info, img }) {
  return (
    <div className="product">
      <div className="product_info">
        <h2>{info}</h2>
      </div>
      <img src={img} alt="" />
      <button>
        <p>see more..</p>
      </button>
    </div>
  );
}

export default Product;
