import React from "react";
import Card from "../../Card";
import MainBox from "../../MainBox";
import teacherImage from "../../../assets/images/teacher.png";
import attendanceImage from "../../../assets/images/attendance.png";
import reportsImage from "../../../assets/images/reports.png";
import feeImage from "../../../assets/images/fee.png";

import HeaderChip from "../../LoginHeaderChip";
import Navbar from "../../Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: "40px" }}>
        <MainBox>
          <HeaderChip headerText={"Admin Dashboard"} />

          <div className="card-container">
            <Card
              image={teacherImage}
              title={"Teacher Module"}
              path={"./admin"}
            />
            <Card
              image={attendanceImage}
              title={"Attendance Module"}
              path={"./attendanceManagementPage"}
            />

            <Card
              image={reportsImage}
              title={"Reports Module"}
              path={"./admin"}
            />
            <Card image={feeImage} title={"Fee Module"} path={"./teacher"} />
          </div>
        </MainBox>
      </div>
    </>
  );
};

export default AdminDashboard;
