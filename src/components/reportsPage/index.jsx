import { React, useState, useEffect } from "react";
import {
  MainBox,
  Navbar,
  InputForm,
  HeaderChip,
  Button,
  FeeTable,
  ReportsRadioButton,
  FetchData,
  AttendanceTable,
  DateField,
  Toast,
  PopUp,
} from "../index.js";

import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "../Button/button.css";
import "../InputForm/inputForm.css";
import "../ReportsRadioButton/radioButton.css";
import "./reportPage.css";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer.js";

export default function ReportPage({ endPoint1, endPoint2, children }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [role, setRole] = useState("");
  useEffect(() => {
    const authrorize = async () => {
      const result = await adminValidator();
      setRole(result);
    };
    authrorize();
  }, []);
  const [rollNumber, setRollNumber] = useState(0);
  const changeHandler = (event) => {
    setRollNumber(parseInt(event.target.value));
  };
  const [grade, setGrade] = useState("pg");
  const changeHandler3 = async (event) => {
    setGrade(event.target.value);
  };
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
        toast("Data Not Found", { type: "error" });
      } else if (result.status === 400) {
        toast("Invalid Input", { type: "error" });
      }
    } else if (methodSelection === "class" && grade !== "") {
      const result = await FetchData(endPoint2, queryString2, method);
      if (result.status === 200) {
        setApiData(result);
        setCondition(false);
      } else if (result.status === 404) {
        toast("Data Not Found", { type: "error" });
      } else if (result.status === 400) {
        toast("Invalid Input", { type: "error" });
      }
    } else {
      toast("Empty Field", { type: "error" });
    }
  };
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp} />
      {condition === true ? (
        <MainBox>
          <HeaderChip HeaderText={children} />
          <div className="inputRadio">
            {methodSelection === "roll_num" ? (
              <InputForm
                text="Enter Roll Number"
                type="number"
                placeholder="F18-1234"
                handleChange={changeHandler}
              />
            ) : (
              <InputForm
                text="Enter Class"
                type="classes"
                placeholder="1-10"
                handleChange={changeHandler3}
              />
            )}
            <div className="radiocontainer">
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
          <HeaderChip HeaderText={children} />
          {children === "Attendance Report" ? (
            <AttendanceTable apiData={apiData.body} />
          ) : (
            <FeeTable apiData={apiData.body} />
          )}
          <Button buttonName="Back" buttonChange={refresh} />
        </MainBox>
      )}
      {showPopUp && (
        <PopUp
          messageText={"Are You Sure You Want To Logout?"}
          onClickBlueButton={togglePopUp}
          redButtonAction={"logout"}
        />
      )}
      <Toast />
    </>
  );
}
