import React from "react";
import {Navbar,MainBox,HeaderChip,Card} from "../index";
import attendanceReportPng from "../../assets/attendanceReport.png";
import feeReportPng from "../../assets/feeReport.png";

export default function ReportsPageMain() {
  return (
    <>
      <Navbar />
      <MainBox>
        <HeaderChip HeaderText={"Reports Management"} />
        <div className="card-container">
          <Card
            title={"Attendance Reports"}
            image={attendanceReportPng}
            path={"./attendanceReports"}
          />
          <Card
            title={"Fee Reports"}
            image={feeReportPng}
            path={"./feeReports"}
          />
        </div>
      </MainBox>
    </>
  );
}
