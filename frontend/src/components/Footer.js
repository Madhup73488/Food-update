import React from "react";
import "../styles/Footer.css"; // Import the CSS file
import logo from "../assets/Juspay-name-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Food-update app is the one which helps you in knowing the daily food
            menu of your canteen
          </p>
          <p>&copy; 2024 Food-update. All rights reserved.</p>
          <img
            src={logo}
            alt="Juspay-logo"
            width={120}
            style={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form action="#">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
