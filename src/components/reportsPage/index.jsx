import React, { useState } from "react";
import MainBox from "../MainDiv";
import Navbar from "../Navbar";
import Waves from "../Waves";
import Form from "../Form";
import Headerchip from "../HeaderChip";
import "../Button/button.css";
import Button from "../Button";
import Resulttable from "../table";
// import { Link } from "react-router-dom";
// import {useSelector} from "react-redux"

export default function ReportsPage() {
  let [condition, setCondition] = useState(true);
  const [rollNumber, setRollNumber] = useState(0);
  const [date, setDate] = useState("");
  const [apiData, setApiData] = useState({ body: [] });
  const changeHandler = (inputData) => {
    setRollNumber(parseInt(inputData));
  };
  const changeHandler2 = (inputData) => {
    setDate(inputData);
  };
  const refresh = () => {
    setCondition(true);
  };
  const fetchData = async () => {
    await fetch(
      `http://localhost:5050/api/admin/getOneStudentAttendance?roll_num=${rollNumber}&end_date=${date}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
          setApiData(data);
        })
        .catch((err) => {
            throw err;
    });
    setCondition(false);
  };

console.log(apiData)
  return (
    <div className="App-header">
      <Navbar />
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
        {condition === true ? (
          <MainBox>
            <Headerchip children={"Fee Reports"} />
            <Form
              id="rollNumber"
              text="Enter Roll Number"
              type="number"
              placeholder="1-10"
              onchange={changeHandler}
            />
            <Form
              id="date"
              text="Select Start date"
              type="date"
              onchange={changeHandler2}
            />
            <Button buttonName="Search" onClick={fetchData} />
          </MainBox>
        ) : (
          <MainBox>
            <Headerchip children={"Fee Reports"} />
            <Resulttable apiData={apiData.body} />
            <Button buttonName="Refresh" onClick={refresh} />
          </MainBox>
        )}
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}
