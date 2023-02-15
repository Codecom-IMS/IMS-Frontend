import { React, useState, useEffect } from "react";
import "./feemanagement.css";
import {
  MainBox,
  HeaderChip,
  Form,
  Button,
  Navbar,
  AddFeeDiv,
  Field,
  Toast,
  PopUp,
} from "../index";
import {
  dataValidator,
  rollNumberValidator,
} from "../../services/utils/FeeValidator/index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";
import { API_URL } from "../../constants/constants";

function FeeManagement() {
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
  const searchStudent = async () => {
    const isRollNumberValid = rollNumberValidator(rollNumberInputData);
    if (isRollNumberValid.status) {
      const method = "GET";
      const getStudentDetails = await fetch(
        `${API_URL}admin/feeDetails?roll_number=${rollNumberInputData}`,
        {
          method,
          headers: { "Content-type": "Application/json" },
        }
      );
      const result = await getStudentDetails.json();

      const isRecordFound = dataValidator(result);
      if (isRecordFound.status) {
        setapiData(result);
      } else {
        toast(isRecordFound.message, isRecordFound.messageType);
      }
    } else {
      toast(isRollNumberValid.message, isRollNumberValid.messageType);
    }
  };
  const feeData = {
    current_paid_fee: feeInputData,
    roll_number: rollNumberInputData,
  };
  const addFee = async () => {
    const method = "POST";
    await fetch(
      `${API_URL}admin/feeDetails`,
      {
        method,
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(feeData),
      },
      setapiData({ studentDetails: [] })
    );
    setRollNumberInputData("");
    toast("Fee paid successfully.", {
      type: "info",
    });
  };
  let total = 0;
  if (apiData?.PrevArrears?.arrears === undefined) {
    total =
      parseInt(apiData.studentDetails[0]?.basic_fee) +
      parseInt(apiData.studentDetails[0]?.others);
  } else {
    total =
      parseInt(apiData.studentDetails[0]?.basic_fee) +
      parseInt(apiData.studentDetails[0]?.others) +
      parseInt(apiData?.PrevArrears?.arrears);
  }
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp} />
      {apiData?.studentDetails.length === 0 ? (
        <MainBox>
          <HeaderChip HeaderText={"Fee module"} />
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
          <HeaderChip HeaderText={"Fee module"} />
          <div className="feediv1">
            <Field
              text="Student Name :"
              data={apiData.studentDetails[0]?.student_name}
            />
            <Field
              text=" Basic fee :"
              data={apiData.studentDetails[0]?.basic_fee}
            />
            <Field text=" Others : " data={apiData.studentDetails[0]?.others} />
          </div>
          <div className="feediv2">
            <Field
              text=" Roll number :"
              data={apiData.studentDetails[0]?.roll_number}
            />
            <Field
              text=" Previous Arrears :"
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

export default FeeManagement;
