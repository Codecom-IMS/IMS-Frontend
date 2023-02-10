import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div>
      <div class="Navbar">
        <div class="Navbar__icon">
          <Link to="./o" style={{decoration :"none"}}>
            {" "}
            <FaArrowLeft />{" "}
          </Link>
        </div>
        <p>Institute Monitoring System</p>
        <div class="Navbar__icon">
          <Link to="./o" style={{decoration :"none"}}>
            <FaHome />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
