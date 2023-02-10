import React from "react";
import {FaArrowLeft, FaHome } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbardiv">
      <div class="Navbar">
        <div class="Navbar__icon">
          <FaArrowLeft />
        </div>
        <text style={{color: "black"}}>Institute Monitoring System</text>
        <div class="Navbar__icon">
        <FaHome />
        </div>
      </div>
      </div>
  );
}

export default Navbar;
