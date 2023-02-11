import React from "react";
import RadioButton from "../RadioButton";
import "./table.css";
export default function Table({ apiData, type, attendance }) {
  let counter = 1;
    let tableData = [];
    let tableRow = [];
    for (let i = 0; i < apiData.body.length; i++) {
      for (let j = 0; j < apiData.body[i].length; j++) {
        tableData[j] = <td>{apiData.body[i][j]}</td>;
      }
      tableRow[i] = (
        <tr>
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
              name={`radio-${counter}`}
              className="radio__1"
              id={`present-${counter}`}
              onChange={(events) => {
                attendance[i] = events.target.value
                console.log(attendance, counter)
              }}
            />
            <RadioButton
              label="A"
              value="A"
              className="radio__1"
              name={`radio-${counter}`}
              id={`absent-${counter}`}
              onChange={(events) => {
                attendance[i] = events.target.value
                console.log(attendance, counter)
              }}
            />
            <RadioButton
              label="L"
              value="L"
              className="radio__1"
              name={`radio-${counter}`}
              id={`leave-${counter}`}
              onChange={(events) => {
                attendance[i] = events.target.value
                console.log(attendance, counter)
              }}
            />
          </div>
        </tr>
      );
      counter++;
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
   
  // else {
  //   return (
  //     <div className="table-wrapper">
  //       <table className="fl-table">
  //         <thead>
  //           <tr>
  //             <th>Roll Number</th>
  //             <th>Name</th>
  //             {type === "edit" ? <th>Attendance</th> : <th></th>}
  //           </tr>
  //         </thead>
  //         <tr>
  //           <td>No Data</td>
  //           <td>No Data</td>
  //           {type === "edit" ? <td>No Data</td> : <td></td>}
  //         </tr>
  //       </table>
  //     </div>
  //   );
  // }
}
