// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

// PrivateRoute component
const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("userToken"); // Check if user is logged in by the presence of the token

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If user is logged in, render the requested component
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
