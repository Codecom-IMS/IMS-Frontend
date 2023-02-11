import React, { useState } from "react";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Form from "../Form";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Table from "../Table";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Toast from "../Toast";
export default function InputAttendance() {
  const [inputData, SetInputData] = useState("");
  const [inputDate, SetInputDate] = useState("");
  const [condition, SetCondition] = useState(false);
  const [apiData, SetApiData] = useState({});
  let attendance = [];
  const toastNotifications = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
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
      SetCondition(true);
    } else {
      toastNotifications("No Data Found! Invalid Input","error")
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
        toastNotifications("Attendance Updated","success")
      }
      SetInputData("");
      SetCondition(false);
    } else if (apiData.status !== 200 && attendance.length === 0) {
      SetCondition(false);
    } else {
      toastNotifications("No Data Selected","error")
    }
  };
  return (
    <>
      <Navbar />
      <MainBox>
        {condition ? (
          <>
            <Table apiData={apiData} type="edit" attendance={attendance} />
            <Button buttonName="Submit" buttonChange={submitButtonChange} />
          </>
        ) : (
          <>
            <HeaderChip HeaderText={"Edit Attendance"} />
            <Form
              text="Enter Class"
              type="classes"
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
        <Toast/>
      </MainBox>
    </>
  );
}
