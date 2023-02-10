import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Navbar } from "../index";
import "../Waves/waves.css";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
