import React from "react";
import Card from "../Card";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainBox";
import Navbar from "../Navbar";
import Waves from "../Waves";
import attendanceReportPng from "../../assets/attendanceReport.png";
import feeReportPng from "../../assets/feeReport.png";

export default function ReportsPageMain() {
  return (
    <div className="App-header">
      <Navbar />
      <MainBox>
        <HeaderChip children={"Reports Management"} />
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
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}
