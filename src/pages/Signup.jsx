import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient"); // Default to patient
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // try {
    //   const response = await axios.post("http://localhost:8000/api/auth/register", {
    //     name,
    //     email,
    //     password,
    //     role,
    //   });

    //   localStorage.setItem("authToken", response.data.token);
    //   localStorage.setItem("userRole", response.data.user.role);

    //   navigate(role === "student" ? "/student-dashboard" : "/professor-dashboard");
    // } catch (err) {
    //   setError(err.response?.data?.message || "Something went wrong. Try again.");
    // }
  };
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      {/* Role Selection */}
      <div className="role-selection">
        <button className={role === "patient" ? "active" : ""} onClick={() => setRole("patient")}>
          Patient
        </button>
        <button className={role === "doctor" ? "active" : ""} onClick={() => setRole("doctor")}>
          Doctor
        </button>
      </div>

      {/* Sign-Up Form */}
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">Sign Up as {role}</button>
      </form>

      {/* Login Option */}
      <p className="login-option">
        Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
      </p>
    </div>
  );
};

export default Signup;
