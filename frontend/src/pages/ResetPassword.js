import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromURL = queryParams.get("token");
    setToken(tokenFromURL);
    console.log("Token from URL:", tokenFromURL);
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/update-password",
        {
          token,
          newPassword,
        }
      );
      setMessage(response.data.message || "Password updated successfully.");
      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2 className="reset-password-title">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="reset-password-input"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="reset-password-button"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {message && <p className="reset-password-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
