import React from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
  return (
    <div>
      <div class="Navbar">
        <div class="Navbar__icon">
          <FaArrowLeft />
        </div>
        <p>Institute Monitoring System</p>
        <div class="Navbar__icon">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
