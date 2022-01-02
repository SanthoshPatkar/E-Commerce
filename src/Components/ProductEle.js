import React from "react";
import "../CSS/Product_electronics.css";
import { useStateValue } from "./StateProvider";

function ProductEle({ id, img, desc, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("hello", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        desc: desc,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default ProductEle;
