import React, { useState } from "react";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Form from "../Form";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Table from "../Table";
import Waves from "../Waves";
export default function InputAttendance() {
  const [inputData, setInputData] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [condition, setCondition] = useState(false);
  const [apiData, SetApiData] = useState({});
  const [apiData2, SetApiDat2] = useState({});
  const date = inputDate;
  const handleDataChange = (newData) => {
    setInputData(newData);
  };
  const handleDateChange = (newData) => {
    setInputDate(newData);
  };
  const buttonChange = async () => {
    const endPoint = `teacher/attendancePage/editAttendance?class=${inputData}&date=${date}`;
    const endPoint2 = `teacher/attendancePage/inputAttendance?class=${inputData}`;
    const method = "GET";
    const data = { class: inputData };
    const result = await FetchApi(endPoint, method, data);
    const result2 = await FetchApi(endPoint2, method, data);
    SetApiData(result);
    SetApiDat2(result2);
    setCondition(true)
  };
  if(condition === false){return (
    <div className="App-header">
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
        <Navbar children={"Edit Attendance"} />
        <MainBox>
          <HeaderChip children={"Edit Attendance"} />
          <Form
            text="Enter Class"
            type="text"
            placeholder="1-10"
            handleChange={handleDataChange}
          />
          <Form
            text="Enter Date"
            type="text"
            placeholder="2023-12-30"
            handleChange={handleDateChange}
          />
          <Button buttonName="Search" buttonChange={buttonChange} />
        </MainBox>
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );}
  else{
    return (
      <div className="App-header">
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
          <Navbar children={"Edit Attendance"} />
          <MainBox>
            <Table apiData={apiData} apiData2={apiData2} condition={condition} />
            <Button buttonName="Submit" buttonChange={buttonChange} />
          </MainBox>
        </div>
        <div className="wavesdiv">
          <Waves />
        </div>
      </div>
    )
  }
}
