import React, { useState } from "react";
import MainBox from "../MainDiv";
import Form from "../Form";
import Headerchip from "../HeaderChip";
import Button from "../Button";
import FetchApi from "../FetchApi";
import Table from "../Table";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Toast from "../Toast";
import DateFormat from "../../services/utils/Dateformat";
export default function InputAttendance() {
  const [inputData, SetInputData] = useState("");
  const [apiData, SetApiData] = useState({});
  const [condition, SetCondition] = useState(false);
  let attendance = [];
  const handleInputDataChange = (event) => {
    SetInputData(event.target.value);
  };
  const toastNotifications = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const searchButtonChange = async () => {
    const date = DateFormat();
    const endPoint = `teacher/attendancePage/inputAttendance?class=${inputData}&date=${date}`;
    const method = "GET";
    const result = await FetchApi(endPoint, method);
    SetApiData(result.status);
    if (result.status === 409) {
      toast("Attendance Already Exists!", "info");
    } else if (result.status === 200) {
      SetCondition(true);
      SetApiData(result)
    } else {
      toastNotifications("No Data Found! Invalid Input", "error");
    }
  };
  const submitButtonChange = async () => {
    if (attendance.length !== 0) {
      const endPoint = `teacher/attendancePage/inputAttendance?className=${inputData}`;
      const method = "POST";
      const data = { class: inputData, attendance: attendance };
      const result = await FetchApi(endPoint, method, data);
      if (result.status === 200) {
        toastNotifications("Attendance Added", "success");
      }
      SetInputData("");
      SetCondition(false);
    } else if (apiData.status !== 200 && attendance.length === 0) {
      SetCondition(false);
    } else {
      toastNotifications("No Data Selected", "error");
    }
  };
  return (
    <>
      <Navbar />
      <MainBox>
        {condition ? (
          <>
            <div>{apiData.message}</div>
            <Table apiData={apiData} type="input" attendance={attendance} />
            <Button buttonName="Submit" buttonChange={submitButtonChange} />
          </>
        ) : (
          <>
            <Headerchip HeaderText={"Input Attendance"} />
            <Form
              text="Enter Class"
              type="classes"
              placeholder="1-10"
              handleChange={handleInputDataChange}
            />
            <Button buttonName="Search" buttonChange={searchButtonChange} />
          </>
        )}
        <Toast />
      </MainBox>
    </>
  );
}
