import React from "react";
import Card from "../Card";
import inputPicture from "../../assets/InputPicture.png";
import editPicture from "../../assets/EditPicture.png";
import MainBox from "../MainDiv";
import HeaderChip from "../HeaderChip";
import Navbar from "../Navbar";
export default function AttendanceManagementPage() {
  return (
    <>
      <Navbar />
      <MainBox>
        <HeaderChip HeaderText="Attendance Management" />
        <div className="card-container">
          <Card
            image={inputPicture}
            title="Input Attendance"
            path="./inputAttendance"
          />
          <Card
            image={editPicture}
            title="Edit Attendance"
            path="./editAttendance"
          />
        </div>
      </MainBox>
    </>
  );
}
