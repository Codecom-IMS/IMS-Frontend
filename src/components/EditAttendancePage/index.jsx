import React, { useState } from "react";
import AttendanceFetchApi from "../AttendanceFetchApi";
import {Button,InputForm,HeaderChip,MainBox,Navbar,PopUp} from "../index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Toast from "../Toast";
import AttendanceTable from "../AttendanceTable";
import { useEffect } from "react";
import { userValidator } from "../../services/utils/authorizer/userAuthorizer";


export default function EditAttendancePage() {
  const [inputData, SetInputData] = useState("PG");
  const [inputDate, SetInputDate] = useState("");
  const [condition, SetCondition] = useState(false);
  const [apiData, SetApiData] = useState({});
  let attendance = [];
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [role, setRole] = useState("");
  useEffect(() => {
    const authrorize = async () => {
      const result = await userValidator();
      setRole(result);
    };
    authrorize();
  }, []);
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
    const result = await AttendanceFetchApi(endPoint, method);
    SetApiData(result);
    if (result.status === 200) {
      SetCondition(true);
    } else {
      toastNotifications("No Data Found! Invalid Input", "error");
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
      const result = await AttendanceFetchApi(endPoint, method, data);
      if (result.status === 200) {
        toastNotifications("Attendance Updated", "success");
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
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        {condition ? (
          <>
            <AttendanceTable
              apiData={apiData}
              type="edit"
              attendance={attendance}
            />
            <Button buttonName="Submit" buttonChange={submitButtonChange} />
          </>
        ) : (
          <>
            <HeaderChip HeaderText={"Edit Attendance"} />
            <InputForm
              text="Enter Class"
              type="classes"
              placeholder="1-10"
              handleChange={handleInputDataChange}
            />
            <InputForm
              text="Enter Date"
              type="Date"
              placeholder="2023-12-30"
              handleChange={handleInputDateChange}
            />
            <Button buttonName="Search" buttonChange={searchButtonChange} />
          </>
        )}
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
        <Toast />
      </MainBox>
    </>
  );
}
