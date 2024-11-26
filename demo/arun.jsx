
import React from "react";
import Logo from "../assets/B2B Logo.png"; // Import logo
import '../styles/Navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  // Toggle menu on small screens
  const toggleMenu = () => {
    document.querySelector(".menu-list").classList.toggle("showmenu");
  };

  return (
    <nav>
      <div className="B2B">
        <img className="logo" src={Logo} alt="B2B Logo" />
      </div>
      <ul className="menu-list">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/login-buyer">Buyer Login</a></li>
        <li><a href="/login-seller">Seller Login</a></li>
        <li><a href="/register">New Registration</a></li>
      </ul>
      <div className="Menu" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
