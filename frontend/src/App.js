import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ResetRequest from "./pages/ResetRequest";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/PageNotFound"; // Import the NotFound component
import Footer from "./components/Footer";
import Stallion from "./pages/Stallion";
import IndiQube from "./pages/IndiQube";
import Ness from "./pages/Ness";
import "./App.css";

function App() {
  const isAuthenticated = localStorage.getItem("userToken"); // Check for token in localStorage

  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-request" element={<ResetRequest />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/stallion" element={<Stallion />} />
          <Route path="/indiqube" element={<IndiQube />} />
          <Route path="/ness" element={<Ness />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />

          {/* Wildcard route to catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
