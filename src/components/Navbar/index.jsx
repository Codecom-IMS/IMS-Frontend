import Cookies from "js-cookie";
import React from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  const Navigate = useNavigate;
  const handleHomeButton=()=>{
    Navigate("/admin-dashboard");
    
  }
  const handleLogout = () => {
    Cookies.remove("Jwt");

    Navigate("/");
  };
  return (
    <div className="Navbardiv">
      <div className="Navbar">
        <a href="http://localhost:3000/landingPage">
          <div className="Navbar__icon">
            <FaSignOutAlt onClick={handleLogout}/>
          </div>
        </a>
        <p className="text">Institute Monitoring System</p>
        <a href="http://localhost:3000/">
          <div className="Navbar__icon">
            <FaHome onClick={handleHomeButton}/>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
