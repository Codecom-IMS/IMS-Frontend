import React from "react";
import Card from "../../card";
import MainBox from "../../MainBox";
import teacherImage from "../../../assets/images/teacher.png";
import attendanceImage from "../../../assets/images/attendance.png";
import reportsImage from "../../../assets/images/reports.png";
import feeImage from "../../../assets/images/fee.png";

import HeaderChip from "../../HeaderChip";
import Navbar from "../../Navbar";

const TeacherDashboard = () => {
  return (
    <>
      <Navbar />
      <MainBox>
        <HeaderChip headerText={"Teacher Dashboard"} />

        <div className="card-container">
          <Card
            image={teacherImage}
            title={"Teacher Module"}
            path={"./admin"}
          />
          <Card
            image={attendanceImage}
            title={"Attendance Module"}
            path={"./teacher"}
          />
        </div>

        <div className="card-container">
          <Card
            image={reportsImage}
            title={"Reports Module"}
            path={"./admin"}
          />
          <Card image={feeImage} title={"Fee Module"} path={"./teacher"} />
        </div>
      </MainBox>
    </>
  );
};

export default TeacherDashboard;
