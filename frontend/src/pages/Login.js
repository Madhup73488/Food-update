import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from "axios"; // Import axios for API calls
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // To handle redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Send POST request to backend to authenticate the user
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      // If login is successful, store the token and redirect
      const { token } = response.data;
      localStorage.setItem("userToken", token); // Store token in localStorage

      // Redirect to dashboard or home page
      navigate("/dashboard"); // Replace with your desired route
    } catch (error) {
      // If login fails, show an error message
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Show error message */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* Show loading text */}
        </button>
        <p className="register-link">
          Forgot Password? <Link to="/reset-request">Reset</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
