import React from "react";
import "../CSS/Product_electronics.css";
import ProductEle from "./ProductEle";

function ProductElectronics() {
  return (
    <div className="product_electronics">
      <div className="head">
        <h6>All categories</h6>
      </div>
      <div className="pro_row">
        <ProductEle
          img="../images/pro-ele-1.jpg"
          desc="Tizum Extended Mouse Pad/Desk Mat Blotter for Work from Home/Office/Gaming | Vegan PU Leather | Anti-Skid, Anti-Slip"
          rating="⭐⭐⭐⭐"
          price="₹899."
        />
        <ProductEle
          img="../images/pro-ele-2.jpg"
          desc="Cosmic Byte Gravity Lightweight RGB 6400 DPI Gaming Mouse with Sunplus IT 6651 Sensor, Software"
          rating="⭐⭐⭐"
          price="₹795."
        />
        <ProductEle
          img="../images/pro-ele-3.jpg"
          desc="Lenovo B530 39.62 cm (15.6 Inches) Durable Water Repellent Design Laptop Urban Backpack with Power Bank Pocket Charger Opening and Adjustable Straps"
          rating="⭐⭐⭐⭐"
          price="₹1540."
        />
      </div>
      <div className="pro_row">
        <ProductEle
          img="../images/pro-ele-4.jpg"
          desc="ZEBRONICS Wired Gaming Mouse - Alien PRO"
          rating="⭐⭐⭐⭐⭐"
          price="₹473."
        />
        <ProductEle
          img="../images/pro-ele-5.jpg"
          desc="AirCase Signature Series CS66 Messenger Premium Bag with Shoulder Strap for 15.6 Laptop & MacBook (Black)"
          rating="⭐⭐⭐"
          price="₹2519."
        />
        <ProductEle
          img="../images/pro-ele-6.webp"
          desc="HP OMEN X-ap046TX 17 (43.18 cms) FHD Gaming Laptop (Intel Core i7-7820HK/32GB/1TB HDD + 1TB SSD/GTX 1080 8 GB GDDR5X Graphics/G-SYNC/VR Ready/Windows 10), Shadow Black"
          rating="⭐⭐⭐⭐"
          price="₹89,789."
        />
      </div>
    </div>
  );
}

export default ProductElectronics;
