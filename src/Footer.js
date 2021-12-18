import React from "react";
import "./allStyles/footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>About Us</h3>
        <ul>
          <li>About 24hours Store</li>
          <li>24hours Credit Card</li>
          <li>24hours financing</li>
          <li>Careers</li>
          <li>Sell on 24hours</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="footer-middle">
        <h3>Customer Service</h3>
        <ul>
          <li>My Account</li>
          <li>Track My Order</li>
          <li>COVID-19 Informaton</li>
          <li>Accessibility Statement</li>
          <li>Help Center</li>
          <li>Return Policy</li>
          <li>Product Recalls</li>
          <li>Report Issues</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact Us</h3>
        <ul>
          <li>24/7 Online Shop</li>
          <li>Call Us at 999-9999-9999</li>
          <li>Email: getsupportanytime@24hours.com</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
