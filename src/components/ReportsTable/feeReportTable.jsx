import React from "react";
import "./table.css";

export default function FeeTable({ apiData }) {
  let key = 0;
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Student Name</th>
            <th>Basic Fee</th>
            <th>Others</th>
            <th>Arrears</th>
            <th>Current Paid Fee</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((row) => {
            return (
              <tr key={(key += 1)}>
                <td>{row.date}</td>
                <td>{row.student_name}</td>
                <td>{row.basic_fee}</td>
                <td>{row.others}</td>
                <td>{row.arrears}</td>
                <td>{row.current_paid_fee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
