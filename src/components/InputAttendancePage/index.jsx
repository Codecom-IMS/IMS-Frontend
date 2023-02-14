import React, { useState } from "react";
import AttendanceFetchApi from "../AttendanceFetchApi";
import {MainBox,InputForm,HeaderChip,Button,Navbar,PopUp} from "../index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Toast from "../Toast";
import DateFormat from "../../services/utils/Dateformat";
import AttendanceTable from "../AttendanceTable";
import { useEffect } from "react";
import { userValidator } from "../../services/utils/authorizer/userAuthorizer";


export default function InputAttendancePage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [inputData, SetInputData] = useState("PG");
  const [apiData, SetApiData] = useState({});
  const [condition, SetCondition] = useState(false);
  let attendance = [];
  const [role, setRole] = useState("");
  useEffect(() => {
    const authrorize = async () => {
      const result = await userValidator();
      setRole(result);
    };
    authrorize();
  }, []);
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
    const result = await AttendanceFetchApi(endPoint, method);
    SetApiData(result.status);
    if (result.status === 409) {
      toast("Attendance Already Exists!", "info");
    } else if (result.status === 200) {
      SetCondition(true);
      SetApiData(result);
    } else {
      toastNotifications("No Data Found! Invalid Input", "error");
    }
  };
  const submitButtonChange = async () => {
    if (attendance.length !== 0) {
      const endPoint = `teacher/attendancePage/inputAttendance?className=${inputData}`;
      const method = "POST";
      const data = { class: inputData, attendance: attendance };
      const result = await AttendanceFetchApi(endPoint, method, data);
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
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        {condition ? (
          <>
            <div>{apiData.message}</div>
            <AttendanceTable
              apiData={apiData}
              type="input"
              attendance={attendance}
            />
            <Button buttonName="Submit" buttonChange={submitButtonChange} />
          </>
        ) : (
          <>
            <HeaderChip HeaderText={"Input Attendance"} />
            <InputForm
              text="Enter Class"
              type="classes"
              placeholder="1-10"
              handleChange={handleInputDataChange}
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
