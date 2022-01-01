import React from "react";
import "../CSS/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      {/* slider */}
      <img className="banner_image" src="../images/amazon-banner1.jpg" alt="" />
      {/* end slider  */}

      {/* items */}

      <div className="home_row">
        <Product
          info="Up to 70% off | Electronics clearance store"
          img="../images/product-img-1.jpg"
          link="/ProductElectronics"
        />
        <Product
          info="Revamp your home in style"
          img="../images/product-img-2.jpg"
          link="/ProductElectronics"
        />
        <Product
          info="Styles for Men | Up to 70% off"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg"
          link="/ProductElectronics"
        />
      </div>
      <div className="home_row">
        <Product
          info="Prime Video: Recommended for you"
          img="../images/pic-1.jpg"
          link="/ProductElectronics"
        />
        <Product
          info="Up to 45% off | Top offers from Amazon Brand - Solimo"
          img="../images/product-img-4.jpg"
          link="/ProductElectronics"
        />
      </div>
      <div className="home_row"></div>
      <div className="home_row"></div>
    </div>
  );
}

export default Home;
