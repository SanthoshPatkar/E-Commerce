import React from "react";
import "../CSS/Product_electronics.css";
import ProductEle from "./ProductEle";

function ProductElectronics() {
  return (
    <div className="product_electronics">
      <div className="head">
        <h6 className="title_pro">All Categories</h6>
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro1"
          img="../images/pro-ele-1.jpg"
          desc="Tizum Extended Mouse Pad/Desk Mat Blotter for Work from Home/Office/Gaming | Vegan PU Leather | Anti-Skid, Anti-Slip"
          rating="⭐⭐⭐⭐"
          price="₹899."
        />
        <ProductEle
          id="pro2"
          img="../images/pro-ele-2.jpg"
          desc="Cosmic Byte Gravity Lightweight RGB 6400 DPI Gaming Mouse with Sunplus IT 6651 Sensor, Software"
          rating="⭐⭐⭐"
          price="₹795."
        />
        <ProductEle
          id="pro3"
          img="../images/pro-ele-3.jpg"
          desc="Lenovo B530 39.62 cm (15.6 Inches) Durable Water Repellent Design Laptop Urban Backpack with Power Bank Pocket Charger Opening and Adjustable Straps"
          rating="⭐⭐⭐⭐"
          price="₹1540."
        />
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro4"
          img="../images/pro-ele-4.jpg"
          desc="ZEBRONICS Wired Gaming Mouse - Alien PRO"
          rating="⭐⭐⭐⭐⭐"
          price="₹473."
        />
        <ProductEle
          id="pro5"
          img="../images/pro-ele-5.jpg"
          desc="AirCase Signature Series CS66 Messenger Premium Bag with Shoulder Strap for 15.6 Laptop & MacBook (Black)"
          rating="⭐⭐⭐"
          price="₹2,519."
        />
        <ProductEle
          id="pro6"
          img="../images/pro-ele-6.webp"
          desc="HP OMEN X-ap046TX 17 (43.18 cms) FHD Gaming Laptop (Intel Core i7-7820HK/32GB/1TB HDD + 1TB SSD/GTX 1080 8 GB GDDR5X Graphics/G-SYNC/VR Ready/Windows 10), Shadow Black"
          rating="⭐⭐⭐⭐"
          price="₹89,789."
        />
      </div>
      <div className="pro_row">
        <ProductEle
          id="pro7"
          img="../images/pro-ele-7.webp"
          desc="Samsung T7 Touch 500GB Up to 1,050MB/s USB 3.2 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Silver (MU-PC500S)"
          rating="⭐⭐⭐⭐⭐"
          price="₹1,199."
        />
        <ProductEle
          id="pro8"
          img="../images/pro-ele-8.webp"
          desc="Lenovo IdeaPad Gaming 3 Intel Core i5 10th Gen 39.62 cm (15.6-inch) FHD 120Hz IPS Gaming Laptop (8GB/1TB HDD +256GB SSD/Windows 10/NVIDIA GTX 1650 4GB GDDR6/Onyx Black/2.2Kg)"
          rating="⭐⭐⭐⭐⭐"
          price="₹61,890."
        />
        <ProductEle
          id="pro9"
          img="../images/pro-ele-9.jpg"
          desc="Dell 24 inch (60.96cm) Full HD Gaming Monitor with HDMI and DP Ports, TN Panel, 144Hz, 1ms, AMD Free Sync, Tilt, Swivel, Height-Adjustable - S2419HGF (Black)"
          rating="⭐⭐⭐⭐"
          price="₹18,619."
        />
      </div>
    </div>
  );
}

export default ProductElectronics;
