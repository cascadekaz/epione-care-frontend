// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Vital Signs</div>
//       <ul className="nav-links">
//         <li><a href="#about">About</a></li>
//         <li><a href="#doctors">Doctors</a></li>
//         <li><a href="#patient-info">Patient Info</a></li>
//         <li><a href="#login">Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


''
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogoClick = () => {
        navigate('/');
  };

  // Retrieve user role from localStorage
  const userRole = localStorage.getItem("userRole");

  // Determine Dashboard Route
  const getDashboardRoute = () => {
    if (userRole === "patient") return "/patient-dashboard";
    if (userRole === "doctor") return "/doctor-dashboard";
    return "/login"; // Default to login if no role found
    
  };
  
  return (
    <nav className="navbar">
      {/* Logo */}
      <img 
    src={logo} 
    alt="logo" 
    className="logo" 
    onClick={handleLogoClick}
    onError={(e) => (e.target.style.display = "none")} // Hide if logo fails to load
    />



      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink></li>
        <li><NavLink to={getDashboardRoute()} onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
        <li><NavLink to="/book-now" onClick={() => setMenuOpen(false)}>Book Now</NavLink></li>
      </ul>

      {/* Login/Signup Buttons */}
      <div className="nav-buttons">
        <button className="login" onClick={() => navigate("/login")}>Log in</button>
        <button className="signup" onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;