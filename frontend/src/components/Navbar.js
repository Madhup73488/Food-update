import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Juspay-name-logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="JUSPAY logo" />
        </Link>

        {/* Hamburger Menu Icon */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i
            className={menuActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>

        {/* Mobile Dropdown Container */}
        <div className={`navbar-dropdown ${menuActive ? "active" : ""}`}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/stallion" className="navbar-link">
                Stallion
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/indiqube" className="navbar-link">
                IndiQube
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/ness" className="navbar-link">
                Ness
              </Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                login <i class="fa-solid fa-caret-right"></i>
              </Link>
            </li> */}
            <li>
              <div className="navbar-button-desktop">
                <Link to="/login" className="navbar-link navbar-button">
                  Log In <i class="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
