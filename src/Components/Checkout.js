import React from "react";
import "../CSS/checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_title">
          <h2>Shopping Cart</h2>
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
          <button>processed to buy</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
