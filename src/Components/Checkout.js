import React from "react";
import "../CSS/checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import Checkoutproduct from "../Components/Checkoutproduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_title">
          <h2 className="cart_header">Shopping Cart</h2>
          <hr />
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              desc={item.desc}
              img={item.img}
              price={item.dis_price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal({basket.length} items):<strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                  <input type="checkbox" />
                  This order contans a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
          />
          <button className="check_button">processed to buy</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
