import React from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbardiv">
      <div className="Navbar">
        <a href="http://localhost:3000/landingPage">
          <div className="Navbar__icon">
            <FaSignOutAlt />
          </div>
        </a>
        <p className="text">Institute Monitoring System</p>
        <a href="http://localhost:3000/">
          <div className="Navbar__icon">
            <FaHome />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
