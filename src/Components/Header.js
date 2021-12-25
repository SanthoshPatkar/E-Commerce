import React from "react";
import "../CSS/header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="../images/Amazon-logo.png" alt="" />
      <div className="header_address"></div>
      <div className="header-search">
        <input className="header-input-search" type="text"></input>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header_option1">country-logo</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Hello, signin</span>
          <span className="header-option2">Accounts & list</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Returns</span>
          <span className="header-option2">&Orders</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
