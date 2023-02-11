import React, { useState } from "react";
import MainBox from "../MainDiv";
import Form from "../Form";
import Headerchip from "../HeaderChip";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Table from "../Table";
export default function InputAttendance() {
  const [inputData, SetInputData] = useState("");
  const [apiData, SetApiData] = useState({});
  const [condition, SetCondition] = useState(false);
  let attendance = [];
  const handleInputDataChange = (event) => {
    SetInputData(event.target.value);
  };
  const searchButtonChange = async () => {
    const endPoint = `teacher/attendancePage/inputAttendance?class=${inputData}`;
    const method = "GET";
    const result = await FetchApi(endPoint, method);
    SetApiData(result);
    if(result.status === 200)
    {
      alert("Data Found")
      SetCondition(true);}
    else{
      alert("No Data Found! Invalid Input")
    }
  };
  const submitButtonChange = async () => {
    if (attendance.length !== 0) {
      const endPoint = `teacher/attendancePage/inputAttendance?className=${inputData}`;
      const method = "POST";
      const data = { class: inputData, attendance: attendance };
      const result = await FetchApi(endPoint, method, data);
      if (result.status === 200) {
        alert("Operation Succesfull");
      }
      SetInputData("");
      SetCondition(false);
    } else if (apiData.status !== 200 && attendance.length === 0) {
      SetCondition(false);
    } else {
      alert("No Data Selected");
    }
  };
  return (
    <MainBox>
      {condition ? (
        <>
          <div>{apiData.message}</div>
          <Table apiData={apiData} type="input" attendance={attendance} />
          <Button buttonName="Submit" buttonChange={submitButtonChange} />
        </>
      ) : (
        <>
          <Headerchip children={"Input Attendance"} />
          <Form
            text="Enter Class"
            type="text"
            placeholder="1-10"
            handleChange={handleInputDataChange}
          />
          <Button buttonName="Search" buttonChange={searchButtonChange} />
        </>
      )}
    </MainBox>
  );
}
