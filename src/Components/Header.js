import React from "react";
import "../CSS/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="../images/Amazon-logo.png" alt="" />
      </Link>

      <div className="header_address">
        <span className="header_option1">Hello</span>
        <span className="header_option2">Select your address</span>
      </div>
      <div className="header_search">
        <div className="all_search">
          <select name="category">
            <option value="all">All</option>
            <option value="deals">Deals</option>
            <option value="accesories">Accesories</option>
            <option value="gift">Giftcards</option>
          </select>
        </div>
        <input className="header_input_search" type="text"></input>
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_l">
            <select name="category">
              <option value="india">India</option>
              <option value="deals">Deals</option>
              <option value="accesories">Accesories</option>
              <option value="gift">Giftcards</option>
            </select>
          </span>
        </div>
        <div className="header_option">
          <span className="header_option1">Hello, signin</span>
          <span className="header_option2">Accounts & list</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">&Orders</span>
        </div>

        <Link to="/Checkout">
          <div className="header_basket">
            <ShoppingBasketIcon className="basket" />
            <span className="header_option2 header_navcount">
              {basket?.length}
            </span>
            <p>cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
