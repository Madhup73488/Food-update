import React, { useState } from "react";
import axios from "axios";
import "../styles/ResetRequest.css";

const ResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/reset-request",
        { email }
      );
      setMessage(response.data.message || "Reset link sent!");
    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="reset-request-container">
      <div className="reset-request-form">
        <h2 className="reset-request-title">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="reset-request-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="reset-request-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Request Reset"}
          </button>
        </form>
        {message && <p className="reset-request-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetRequest;
