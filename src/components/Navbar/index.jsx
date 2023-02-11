import React from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Navbardiv">
      <div className="Navbar">
        <Link to="./LandingPage">
        <div className="Navbar__icon" >
          <FaSignOutAlt/>
        </div>
        </Link>
        <p className="text">Institute Monitoring System</p>
        <Link to="./">
        <div className="Navbar__icon">
        <FaHome />
        </div>
        </Link>
      </div>
      </div>
  );
}

export default Navbar;
