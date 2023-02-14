import React, { useState } from "react";
import teacherImage from "../../../assets/images/teacher.png";
import attendanceImage from "../../../assets/images/attendance.png";
import reportsImage from "../../../assets/images/reports.png";
import feeImage from "../../../assets/images/fee.png";
import { Card, MainBox, HeaderChip,PopUp, Navbar } from "../../index";
import {adminValidator} from "../../../services/utils/authorizer/userAuthorizer";
import { useEffect } from "react";

const AdminDashboard = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [role, setRole] = useState()
  useEffect(()=>{
    const role = adminValidator()
    setRole(role)
  },[])

  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        <HeaderChip HeaderText={"Admin Dashboard"} />

        <div className="dashboard-card-container">
          <div className="card-container">
          <Card
            image={teacherImage}
            title={"User Management"}
            path={"./mainPage"}
          />
          <Card
            image={attendanceImage}
            title={"Attendance Module"}
            path={"./attendanceManagementPage"}
          />
          </div>
          <div className="card-container">
          <Card
            image={reportsImage}
            title={"Reports Module"}
            path={"./reportsPage"}
          />
          <Card
            image={feeImage}
            title={"Fee Module"}
            path={"./feeManagement"}
          />
          </div>
        </div>
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
};

export default AdminDashboard;
