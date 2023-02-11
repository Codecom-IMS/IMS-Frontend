import React, { useState } from "react";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Form from "../Form";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainDiv";
import Table from "../Table";
export default function InputAttendance() {
  const [inputData, SetInputData] = useState("");
  const [inputDate, SetInputDate] = useState("");
  const [condition, SetCondition] = useState(false);
  const [apiData, SetApiData] = useState({});
  let attendance = [];
  const handleInputDataChange = (event) => {
    SetInputData(event.target.value);
  };
  const handleInputDateChange = (event) => {
    SetInputDate(event.target.value);
  };
  const searchButtonChange = async () => {
    const endPoint = `teacher/attendancePage/editAttendance?class=${inputData}&date=${inputDate}`;
    const method = "GET";
    const result = await FetchApi(endPoint, method);
    SetApiData(result);
    if (result.status === 200) {
      alert("Data Found");
      SetCondition(true);
    } else {
      alert("No Data Found! Invalid Input");
    }
  };
  const submitButtonChange = async () => {
    if (attendance.length !== 0) {
      const endPoint = `teacher/attendancePage/editAttendance`;
      const method = "PUT";
      const data = {
        class: inputData,
        attendance: attendance,
        date: inputDate,
      };
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
            <Table apiData={apiData} type="edit" attendance={attendance} />
            <Button buttonName="Submit" buttonChange={submitButtonChange} />
          </>
        ) : (
          <>
            <HeaderChip children={"Edit Attendance"} />
            <Form
              text="Enter Class"
              type="text"
              placeholder="1-10"
              handleChange={handleInputDataChange}
            />
            <Form
              text="Enter Date"
              type="Date"
              placeholder="2023-12-30"
              handleChange={handleInputDateChange}
            />
            <Button buttonName="Search" buttonChange={searchButtonChange} />
          </>
        )}
      </MainBox>
    );
  
}
