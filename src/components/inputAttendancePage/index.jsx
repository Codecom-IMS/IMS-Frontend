import React from "react";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Waves from "../Waves";
import Form from "../Form";
import Headerchip from "../HeaderChip";
import Button from "../Button";
export default function InputAttendance() {
  return (
    <div className="App-header">
      <Navbar />
      <div
        className="inner-header flex"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <MainBox>
          <Headerchip children={"Input Attendance"} />
          <Form text="Enter Class" type="text" placeholder="1-10" />
          <Button buttonName="Search" />
        </MainBox>
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}
