import "./style.css";
import attendance from "./icons8-attendance-30.png";
import reports from "./icons8-graph-report-50.png";
import user from "./icons8-student-registration-30.png";
import fee from "./icons8-management-30.png";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div class="header">
        <h1>WELCOME TO</h1>
        <h1>Institute Monitoring System</h1>
        <p>Powered by CodeCom</p>
      </div>
      <div class="row1-container">
        <Link to="./editAttendance" className="box box-down cyan" style={{textDecoration:"none"}}>
          <div >
            <h2>Attendance Management</h2>
            <p>Enter to Input Attendance or Edit Attendance</p>
            <img src={attendance} alt="Loading" />
          </div>
        </Link>

        <Link to="./userManagement" className="box red" style={{textDecoration:"none"}}>
          <div >
            <h2>Student and Teacher Management</h2>
            <p>Enter to create/delete a Student or Teacher profile</p>
            <img src={user} alt="Loading" />
          </div>
        </Link>
        <Link to="./reportsManagement" className="box box-down blue" style={{textDecoration:"none"}}>
          <div >
            <h2>Reports Management</h2>
            <p>Enter to Generate Reports</p>
            <img style={{ width: "30px" }} src={reports} alt="Loading" />
          </div>
        </Link>
      </div>
      <div class="row2-container">
        <Link to="./inputAttendance" className="box orange" style={{textDecoration:"none"}}>
          <div >
            <h2>Fee Management</h2>
            <p>Enter to Input Fee of a Student</p>
            <img src={fee} alt="Loading" />
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
