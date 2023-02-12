import React from "react";
import {  FaSignOutAlt, FaHome } from "react-icons/fa";
import "./navBar.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const Navigate = useNavigate();
  const hnadleHomeButton=()=>{
    Navigate("/");
    
  }
  const handleLogout = () => {
    Cookies.remove("Jwt");
    Cookies.remove("Jwt");

    Navigate("/");
  };
  return (
    <>
      <div className="Navbardiv">
        <div className="Navbar">
          <div className="Navbar__icon">
            <FaHome  onClick={hnadleHomeButton} />
          </div>
          <p>Institute Monitoring System</p>
          <div className="Navbar__icon">
            <FaSignOutAlt onClick={handleLogout}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
