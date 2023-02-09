import React, { useState } from "react";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Waves from "../Waves";
import Form from "../Form";
import Headerchip from "../HeaderChip";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Table from "../Table";
export default function InputAttendance() {
  const [inputData, SetInputData] = useState("");
  const [apiData, SetApiData] = useState({});
  const [condition, SetCondition] = useState(false);
  const handleChange = (newData) => {
    SetInputData(newData);
  };
  const buttonChange = async () => {
    const endPoint = `teacher/attendancePage/inputAttendance?class=${inputData}`;
    const method = "GET";
    const data = { class: inputData };
    const result = await FetchApi(endPoint, method, data);
    SetApiData(result);
    SetCondition(true)
  };
  if(condition === false)
  {return (
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
        <Navbar />
        <MainBox>
          <Headerchip children={"Input Attendance"} />
          <Form
            text="Enter Class"
            type="text"
            placeholder="1-10"
            handleChange={handleChange}
          />
          <Button buttonName="Search" buttonChange={buttonChange} />
          <div>{apiData.message}</div>
          <Table apiData={apiData}/>
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
          <Navbar />
          <MainBox>
            <div>{apiData.message}</div>
            <Table apiData={apiData}/>
            <Button buttonName="Submit" buttonChange={buttonChange} />
          </MainBox>
        </div>
        <div className="wavesdiv">
          <Waves />
        </div>
      </div>
    );
  }
}
