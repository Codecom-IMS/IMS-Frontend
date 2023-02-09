// import React, { useState } from "react";
import "./style.css";
import attendance from "./icons8-attendance-30.png";
import reports from "./icons8-graph-report-50.png";
import createUser from "./icons8-student-registration-30.png";
import feeModule from "./icons8-management-30.png";
import { Link } from "react-router-dom";
// import CreateUser from "../createUserPage";
// import InputAttendancePage from "../inputAttendancePage";
// import Dashboard from "../dashboard";

export default function SideBar() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div class="segmented-control">
        <Link to="./">
        <input type="radio" name="radio2" value="3" id="tab-1" checked />
        <label for="tab-1" class="segmented-control__1">
          <img src={createUser} alt="Loading" />
          <text style={{ fontSize: "13px", color: "black" }}>
            User Management
          </text>
        </label>
        </Link>
        <Link to="./editAttendance">
        <input type="radio" name="radio2" value="4" id="tab-2" />
        <label for="tab-2" class="segmented-control__2">
          <img src={attendance} alt="Loading" />
          <text style={{ fontSize: "13px", color: "black" }}>
            Attendance Management
          </text>
        </label>
        </Link>
        <Link to="./inputAttendance">
        <input type="radio" name="radio2" value="5" id="tab-3" />
        <label for="tab-3" class="segmented-control__3">
          <img src={feeModule} alt="Loading" />
          <text style={{ fontSize: "13px", color: "black" }}>
            Fee Management
          </text>
        </label>
        </Link>
        <Link to="inputAttendance">
        <input type="radio" name="radio2" value="5" id="tab-4" />
        <label for="tab-4" class="segmented-control__4">
          <img style={{ width: "30px" }} src={reports} alt="Loading" />
          <text style={{ fontSize: "13px", color: "black" }}>
            Reports Management
          </text>
        </label>
        </Link>
      </div>
    </div>
  );
}
