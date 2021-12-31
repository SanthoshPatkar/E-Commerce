import React from "react";
import "../CSS/checkout.css";
import CurrencyFormat from "react-currency-format";

function Checkout() {
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
                  Subtotal(0 items):
                  <strong>0</strong>
                </p>
                <small className="subtotal_gift">
                  <input type="checkbox" />
                  This order contans a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <button>processed to buy</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
