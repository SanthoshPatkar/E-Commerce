import React from "react";
import "../CSS/Product_electronics.css";
import ProductEle from "./ProductEle";

function Productmen() {
  return (
    <div className="product_item">
      <div className="head">
        <h6 className="title_pro">Mens Shops</h6>
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro31"
          img="../images/pro31.webp"
          desc="Timex Analog Black Dial Men's Watch-TW000U914"
          rating="⭐⭐⭐⭐"
          price="2,999"
          p="2999.00"
        />
        <ProductEle
          id="pro32"
          img="../images/pro32.webp"
          desc="Sojanya (Since 1958), Mens Silk Blend, Embroidered Nehru Jacket"
          rating="⭐⭐⭐⭐"
          price="1,499"
          p="1499.00"
        />
        <ProductEle
          id="pro33"
          img="../images/pro33.webp"
          desc="Saifoo Men's Dupion Silk Nehru Jacket."
          rating="⭐⭐⭐⭐"
          price="549"
          p="549.00"
        />
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro34"
          img="../images/pro34.webp"
          desc="Puma Men's Erupter Black-Urban Red Sneaker-7 UK (19520206)"
          rating="⭐⭐⭐⭐⭐"
          price="2,850"
          p="2850.00"
        />
        <ProductEle
          id="pro35"
          img="../images/pro35.webp"
          desc="TRAVANDO Multicolored Leather Men's RFID Blocking Wallet (U4)"
          rating="⭐⭐⭐"
          price="6,179"
          p="6179.00"
        />
        <ProductEle
          id="pro36"
          img="../images/pro36.webp"
          desc="MARK LEUTE Reversible Jacket for Men"
          rating="⭐⭐⭐⭐"
          price="1,359"
          p="1359.00"
        />
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro37"
          img="../images/pro37.webp"
          desc="Spykar Men's Regular Jeans"
          rating="⭐⭐⭐⭐"
          price="1,800"
          p="1800.00"
        />
        <ProductEle
          id="pro38"
          img="../images/pro38.webp"
          desc="Fossil Grant Chronograph Black Dial Men's Watch-FS4832"
          rating="⭐⭐⭐⭐⭐"
          price="6,846"
          p="6846"
        />
        <ProductEle
          id="pro39"
          img="../images/pro39.jpg"
          desc="Fila Men's Dual Speed Running Shoes"
          rating="⭐⭐⭐⭐"
          price="1,126"
          p="1126"
        />
      </div>
    </div>
  );
}

export default Productmen;
