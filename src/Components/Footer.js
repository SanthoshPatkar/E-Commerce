import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="top_bar">
        <div className="content_info">
          <h5>Get to Know Us</h5>
          <p>About Us</p>
          <p> Careers</p>
          <p> Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="content_info">
          <h5>Connect with Us</h5>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="content_info">
          <h5>Make Money with Us</h5>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="content_info">
          <h5>Let Us Help You</h5>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="middle_bar">
        <div className="middle_logo_div">
          <Link to="/">
            <img
              className="middle_logo"
              src="../images/Amazon-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="country">
          <p>Australia</p>
          <p>Brazil</p>
          <p>Canada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
          <p>United Kingdom</p>
          <p>United States</p>
        </div>
      </div>
      <div className="bottom_bar">
        <div className="content_info">
          <div className="above">
            <h6>AbeBooks</h6>
            <p>Books, art</p>
            <p>& collectibles</p>
          </div>
          <div className="below">
            <h6>Shopbop</h6>
            <p>Designer</p>
            <p>Fashion Brands</p>
          </div>
        </div>
        <div className="content_info">
          <div className="above">
            <h6>Amazon Web Services</h6>
            <p>Scalable Cloud</p>
            <p>Computing Services</p>
          </div>
          <div className="below">
            <h6>Amazon Business</h6>
            <p>Everything For</p>
            <p>Your Business</p>
          </div>
        </div>
        <div className="content_info">
          <div className="above">
            <h6>Audible</h6>
            <p>Download</p>
            <p>Audio Books</p>
          </div>
          <div className="below">
            <h6>prime Now</h6>
            <p>2-Hour Delivery</p>
            <p>On Every Items</p>
          </div>
        </div>
        <div className="content_info">
          <div className="above">
            <h6>DPReview</h6>
            <p>Digital</p>
            <p>Photograpy</p>
          </div>
          <div className="below">
            <h6>Amazon Prime Music</h6>
            <p>75 million songs, ad-free</p>
            <p >Over 10 million podcast episodes</p>
          </div>
        </div>
        <div className="content_info">
          <div className="above">
            <h6>IMDb</h6>
            <p>Movies, TV</p>
            <p>& Celebrities</p>
          </div>
        </div>
      </div>
      <div className="bottom_terms">
        <p>Conditions of Use & Sale</p>
        <p>Fake Amazon Clone</p>
        <p>© Santhosh G Patkar</p>
      </div>
    </div>
  );
}

export default Footer;
