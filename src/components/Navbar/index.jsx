import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbardiv">
      <div className="Navbar">
        <div className="Navbar__icon">
          <FaArrowLeft />
        </div>
        <p>Institute Monitoring System</p>
        <div className="Navbar__icon">
          <FaHome />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
