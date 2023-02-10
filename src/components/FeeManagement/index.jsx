import React, { useState } from "react";
import "./feemanagement.css";
import {
  MainBox,
  HeaderChip,
  Form,
  Button,
  Waves,
  Navbar,
  AddFeeDiv,
  Field,
  NotifyToast,
} from "../index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function FeeManagement() {
  const [rollNumberInputData, setRollNumberInputData] = useState("");
  const [apiData, setapiData] = useState({
    studentDetails: [],
  });
  const [feeInputData, setfeeInputData] = useState("");
  const rollhandleChange = (newData) => {
    setRollNumberInputData(newData);
  };
  const feeHandleChange = (newData) => {
    setfeeInputData(newData);
  };
  console.log(rollNumberInputData);
  const searchStudent = async () => {
    const method = "GET";
    const getStudentDetails = await fetch(
      `http://localhost:5000/api/admin/feeDetails?roll_number=${rollNumberInputData}`,
      {
        method,
        headers: { "Content-type": "Application/json" },
      }
    );
    const result = await getStudentDetails.json();
    console.log(result);
    setapiData(result);
  };
  const feeData = {
    current_paid_fee: feeInputData,
    roll_number: rollNumberInputData,
  };
  const addNotification = () => {
    toast("Fee paid successfully.", {
      type: "success",
    });
  };
  const addFee = async () => {
    const method = "POST";
    await fetch(
      `http://localhost:5000/api/admin/addFee`,
      {
        method,
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(feeData),
      },
      setapiData({ studentDetails: [] })
    );
    addNotification();
  };

  let total =
    parseInt(apiData.studentDetails[0]?.basic_fee) +
    parseInt(apiData.studentDetails[0]?.others) +
    parseInt(apiData?.PrevArrears?.arrears);

  return (
    <div className="App-header">
      <Navbar />
      <div className="inner-header flex">
        {apiData?.studentDetails.length === 0 ? (
          <MainBox>
            <HeaderChip />
            <Form
              text="Enter Roll Number"
              type="number"
              placeholder="e.g F18-1138"
              handleChange={rollhandleChange}
            />
            <Button buttonName="search" buttonChange={searchStudent} />
          </MainBox>
        ) : (
          <AddFeeDiv>
            <HeaderChip />

            <div className="feediv1">
              <Field
                text="Student Name :"
                data={apiData.studentDetails[0]?.student_name}
              />
              <Field
                text=" basic fee :"
                data={apiData.studentDetails[0]?.basic_fee}
              />
              <Field
                text="others : "
                data={apiData.studentDetails[0]?.others}
              />
            </div>
            <div className="feediv2">
              <Field
                text=" roll number :"
                data={apiData.studentDetails[0]?.roll_number}
              />
              <Field
                text=" previous arrears :"
                data={
                  apiData?.PrevArrears?.arrears === undefined
                    ? 0
                    : apiData?.PrevArrears?.arrears
                }
              />
              <Field text=" Total Fee " data={total} />
            </div>
            <div className="feediv3">
              <Form
                type="number"
                placeholder="e.g 2800"
                handleChange={feeHandleChange}
              />
              <Button buttonName="Add Fee" buttonChange={addFee} />
            </div>
          </AddFeeDiv>
        )}
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
      <NotifyToast />
    </div>
  );
}

export default FeeManagement;
