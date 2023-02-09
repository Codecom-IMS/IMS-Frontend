import React from "react";
import Button from "../Button";
import Form from "../Form";
import HeaderChip from "../HeaderChip";
import Table from "../Table";

export default function InputAttendanceDiv({ apiData, apiData2, condition, handleChange, buttonChange }) {
  if (condition === true)
    return (
      <div>
        <div>{apiData.message}</div>
        <Table apiData={apiData} apiData2={apiData2} condition={condition} />
      </div>
    );
  else
    <div>
      <HeaderChip children={"Input Attendance"} />
      <Form
        text="Enter Class"
        type="text"
        placeholder="1-10"
        handleChange={handleChange}
      />
      <Button buttonName="Search" buttonChange={buttonChange} />
    </div>;
}
