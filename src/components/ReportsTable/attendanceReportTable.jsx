import React from "react";
import "./table.css";

export default function AttendanceTable({ apiData }) {
  let key =0
    return (
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Student Name</th>
              <th>Father Name</th>
              <th>Class</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((row) => {
              return (
                <tr key={key+=1}>
                  <td>{row.date}</td>
                  <td>{row.student_name}</td>
                  <td>{row.father_name}</td>
                  <td>{row.class}</td>
                  <td>{row.attendance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }