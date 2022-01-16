import React from 'react'
import "../CSS/Product_electronics.css";
import ProductEle from "./ProductEle";


function ProductHome() {
    return (
        <div className="product_item">
        <div className="head"> 
          <h6 className="title_pro">story at home coop</h6>
        </div>
        <div className="pro_row">
          <ProductEle
            id="pro21"
            img="../images/pro21.jpg"
            desc="Story@Home Sensational 100% Cotton Soft Bath Towel Single Piece, 450 GSM - Men and Women Bath Towel -Navy Blue"
            rating="⭐⭐⭐⭐"
            price="379"
            p="379.00"
          />
          <ProductEle
            id="pro22"
            img="../images/pro22.jpg"
            desc="Story@Home Stone Modern Door Mat (Brown, Fabric, 40x60cm)."
            rating="⭐⭐⭐⭐"
            price="209"
            p="209.00"
          />
          <ProductEle
            id="pro23"
            img="../images/pro23.jpg"
            desc="Story@Home Faux Silk Solid Ring top Window Curtain, 5 feet, Navy Blue, 2 Pieces"
            rating="⭐⭐⭐⭐"
            price="829"
            p="829.00"
          />
        </div>
        <div className="pro_row">
          <ProductEle
            id="pro24"
            img="../images/pro24.jpg"
            desc="Story@Home Super-Soft Beautiful Tropical Patterns Printed Vibrant Colors 100% Cotton Double Flat Sheets Bedsheet"
            rating="⭐⭐⭐⭐⭐"
            price="619"
            p="619.00"
          />
          <ProductEle
            id="pro25"
            img="../images/pro25.jpg"
            desc="Story@Home Blackout Faux Silk Superior 2 Piece Plain Solid Window Curtains, 5 feet, Black"
            rating="⭐⭐⭐"
            price="858"
            p="858.00"
          />
          <ProductEle
            id="pro26"
            img="../images/pro26.jpg"
            desc="Story@Home Premium Forever Modern Style Fine Cotton Luxurious Beautiful Silky Soft Comfort Designer Floral Pattern 1 King Size Bedsheet and 2 Pillow Cover"
            rating="⭐⭐⭐⭐"
            price="1,048"
            p="1048.00"
          />
        </div>
        <div className="pro_row">
          <ProductEle
            id="pro27"
            img="../images/pro27.webp"
            desc="Story@Home Cotton Bath and Hand Towel Set 450 GSM (Lime and Navy, Set of 6 Piece)"
            rating="⭐⭐⭐⭐⭐"
            price="849"
            p="849.00"
          />
          <ProductEle
            id="pro28"
            img="../images/pro28.webp"
            desc="Make it Yours 100% Cotton Single Bed (230 x 150 cms) Reversible 3 Layered AC Dohar/AC Comforter/Quilt for Summer"
            rating="⭐⭐⭐⭐⭐"
            price="1,399"
            p="1399"
          />
          <ProductEle
            id="pro29"
            img="../images/pro29.webp"
            desc="Story@Home Polyester Striped Door Curtain, 7 feet, Navy Blue, Pack of 2"
            rating="⭐⭐⭐⭐"
            price="779"
            p="779"
          />
        </div>
      </div>
    )
}

export default ProductHome
