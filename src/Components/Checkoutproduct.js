import React from "react";
import "../CSS/Checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function Checkoutproduct({ id, img, desc, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeBasket = () =>
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  return (
    <div className="checkoutproduct">
      <img src={img} alt="" />
      <div className="checkpro_info">
        <p>{desc}</p>
        <button onClick={removeBasket} className="sub_button">
          Delete
        </button>
      </div>
      <div className="checkpro_price">
        <p>₹{price}</p>
      </div>
    </div>
  );
}

export default Checkoutproduct;
