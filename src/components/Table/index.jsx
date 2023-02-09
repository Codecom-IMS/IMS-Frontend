import React from "react";

export default function Table({ apiData }) {
  let tableData = [];
  let tableRow = [];
  if(apiData.body){for (let i = 0; i < apiData.body.length; i++) {
    for (let j = 0; j < apiData.body[i].length; j++) {
      tableData[j] = <td>{apiData.body[i][j]}</td>;
    }
    tableRow[i] = <tr>{tableData[i]}</tr>;
  }}
  else{
  for (let i = 0; i < apiData.length; i++) {
    for (let j = 0; j < apiData[i].length; j++) {
      tableData[j] = <td>{apiData[i][j]}</td>;
    }
    tableRow[i] = <tr>{tableData[i]}</tr>;
  }}
  if (apiData.status === 200) {
    return (
      <table>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Attendance</th>
        </tr>
        {tableRow}
      </table>
    );
  } else {
    return (
      <table>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Attendance</th>
        </tr>
        <tr>
          <td>No Data</td>
          <td>No Data</td>
          <td>No Data</td>
        </tr>
      </table>
    );
  }
}
