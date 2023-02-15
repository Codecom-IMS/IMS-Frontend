import React from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import "./navBar.css";

function Navbar({ role, onClickHandler }) {
  let homeButtonURL;
  if (role === "admin") {
    homeButtonURL = "http://localhost:3000/admin/admin-dashboard";
  } else {
    homeButtonURL = "http://localhost:3000/teacher/teacher-dashboard";
  }
  return (
    <div className="Navbardiv">
      <div className="Navbar">
        <div className="Navbar__icon">
          <a href={homeButtonURL} style={{ color: "var(--primary)" }}>
            <FaHome />
          </a>
        </div>
        <p>Institute Monitoring System</p>
        <div className="Navbar__icon">
          <FaSignOutAlt onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
