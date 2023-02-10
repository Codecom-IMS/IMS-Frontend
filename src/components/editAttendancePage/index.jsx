import React from "react";
import Button from "../Button";
import Form from "../Form";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Waves from "../Waves";
export default function InputAttendance() {
  return (
    <div className="App-header">
      <Navbar children={"Edit Attendance"} />
      <div
        className="inner-header flex"
        style={{
          height: "65vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <MainBox>
          <HeaderChip children={"Edit Attendance"}/>
          <Form text="Enter Class" type="text"placeholder="1-10" />
          <Form text="Enter Date" type="Date" placeholder="2023-12-30"/>
          <Button buttonName="Search"/>
        </MainBox>
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}
