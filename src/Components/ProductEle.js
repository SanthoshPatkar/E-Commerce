import React from "react";
import "../CSS/Product_electronics.css";

function ProductEle({ img, desc, rating, price }) {
  return (
    <div className="Product_Ele">
      <img src={img} alt="" />
      <div className="desc">
        <p>{desc}</p>
      </div>

      <div className="bottom">
        <p>{rating}</p>
        <p>{price}</p>
      </div>
      <button>Add To Busket</button>
    </div>
  );
}

export default ProductEle;
