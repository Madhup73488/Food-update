import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageNotFound.css"; // Import the CSS for styling

function PageNotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
        <p className="notfound-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
