import React from "react";
import RadioButton from "../AttendanceRadioButton";
import "./AttendanceTable.css";
export default function AttendanceTable({ apiData, type, attendance }) {
  let tableData = [];
  let tableRow = [];
  for (let i = 0; i < apiData.body.length; i++) {
    for (let j = 0; j < apiData.body[i].length; j++) {
      tableData[j] = <td>{apiData.body[i][j]}</td>;
    }
    tableRow[i] = (
      <tr key={i}>
        {tableData[0]}
        {tableData[1]}
        {tableData[2]}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <RadioButton
            label="P"
            value="P"
            name={`radio-${i}`}
            className="radio__1"
            id={`present-${i}`}
            onChange={(events) => {
              attendance[i] = events.target.value;
            }}
          />
          <RadioButton
            label="A"
            value="A"
            className="radio__1"
            name={`radio-${i}`}
            id={`absent-${i}`}
            onChange={(events) => {
              attendance[i] = events.target.value;
            }}
          />
          <RadioButton
            label="L"
            value="L"
            className="radio__1"
            name={`radio-${i}`}
            id={`leave-${i}`}
            onChange={(events) => {
              attendance[i] = events.target.value;
            }}
          />
        </div>
      </tr>
    );
  }
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            {type === "edit" ? <th>Previous Attendance</th> : <></>}
            <th>Attendance</th>
          </tr>
        </thead>
        {tableRow}
      </table>
    </div>
  );
}
