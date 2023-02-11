import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./navbar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const Navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("Jwt");
    Navigate("/");
  };
  return (
    <>
      <div className="Navbardiv">
        <div className="Navbar">
          <div className="Navbar__icon">
            <FaArrowLeft onClick={handleLogout} />
          </div>
          <p>Institute Monitoring System</p>
          <div className="Navbar__icon">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
