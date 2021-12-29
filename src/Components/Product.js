import React from "react";
import "../CSS/product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <h2>Up to 70% off | Electronics clearance store</h2>
      </div>
      <img src="../images/product-img-1.jpg" alt="" />
      <button>
        <p>see more..</p>
      </button>
    </div>
  );
}

export default Product;
