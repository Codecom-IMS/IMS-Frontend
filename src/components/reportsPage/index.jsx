import React, { useState } from "react";
import {
  MainBox,
  Navbar,
  Waves,
  Form,
  HeaderChip,
  Button,
  FeeTable,
  ReportsRadioButton,
  FetchData,
  AttendanceTable,
  DateField,
  Toast,
} from "../index.js";

import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "../Button/button.css";
import "../InputForm/inputForm.css";
import "../reportsRadioButton/radioButton.css";
import "./reportPage.css";

export default function ReportPage({ endPoint1, endPoint2, children }) {
  const [rollNumber, setRollNumber] = useState(0);
  const changeHandler = (inputData) => {
    setRollNumber(parseInt(inputData));
  };
  const [grade, setGrade] = useState("pg");
  const changeHandler3 = async (inputData) => {
    console.log(inputData);
    setGrade(inputData);
  };
  console.log(grade);
  const [startDate, setStartDate] = useState("");
  const changeHandler1 = (inputData) => {
    setStartDate(inputData);
  };
  const [endDate, setEndDate] = useState("");
  const changeHandler2 = (inputData) => {
    setEndDate(inputData);
  };

  const [methodSelection, setMethodSelection] = useState("roll_num");
  const onChangeMethodSelection = (newValue) => {
    setMethodSelection(newValue);
  };
  let [condition, setCondition] = useState(true);
  const refresh = () => {
    setRollNumber(0);
    setGrade("pg");
    setStartDate("");
    setEndDate("");
    setCondition(true);
  };
  const [apiData, setApiData] = useState({ body: [] });
  const fetchData = async () => {
    const queryString1 = `?roll_num=${rollNumber}&start_date=${startDate}&end_date=${endDate}`;
    const queryString2 = `?std_grade=${grade}&start_date=${startDate}&end_date=${endDate}`;
    const method = "GET";
    if (methodSelection === "roll_num" && rollNumber !== 0) {
      const result = await FetchData(endPoint1, queryString1, method);
      if (result.status === 200) {
        setApiData(result);
        setCondition(false);
      } else if (result.status === 404) {
        toast("Data Not Found");
      } else if (result.status === 400) {
        toast("Invalid Input");
      }
    } else if (methodSelection === "class" && grade !== "") {
      const result = await FetchData(endPoint2, queryString2, method);
      if (result.status === 200) {
        setApiData(result);
        setCondition(false);
      } else if (result.status === 404) {
        toast("Data Not Found");
      } else if (result.status === 400) {
        toast("Invalid Input");
      }
    } else {
      toast("Empty Field");
    }
  };
  return (
    <div className="App-header">
      <Navbar />
      <div className="inner-header">
        {condition === true ? (
          <MainBox>
            <HeaderChip children={children} />
            <div className="inputRadio">
              {methodSelection === "roll_num" ? (
                <Form
                  text="Enter Roll Number"
                  type="number"
                  placeholder="F18-1234"
                  onchange={changeHandler}
                />
              ) : (
                <Form
                  text="Enter Class"
                  type="classes"
                  placeholder="1-10"
                  onchange={changeHandler3}
                />
              )}
              <div className="radio-container">
                <ReportsRadioButton
                  label={"Roll Number"}
                  className={"radio__1"}
                  id={"radio-1"}
                  value={"roll_num"}
                  onChangeMethod={onChangeMethodSelection}
                  defaultChecked={true}
                />
                <ReportsRadioButton
                  label={"Class"}
                  className={"radio__2"}
                  id={"radio-2"}
                  value={"class"}
                  onChangeMethod={onChangeMethodSelection}
                  defaultChecked={false}
                />
              </div>
            </div>

            <div className="fromDiv">
              <DateField text="From" type="date" onchange={changeHandler1} />
              <DateField text="To" type="date" onchange={changeHandler2} />
            </div>

            <Button buttonName="Search" buttonChange={fetchData} />
          </MainBox>
        ) : (
          <MainBox>
            <HeaderChip children={children} />
            {children === "Attendance Report" ? (
              <AttendanceTable apiData={apiData.body} />
            ) : (
              <FeeTable apiData={apiData.body} />
            )}
            <Button buttonName="Refresh" buttonChange={refresh} />
          </MainBox>
        )}
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
      <Toast />
    </div>
  );
}
