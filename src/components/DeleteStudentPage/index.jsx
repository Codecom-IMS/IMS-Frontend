import React, { useState } from "react";
import {
  MainBox,
  HeaderChip,
  InputField,
  BlueButton,
  RedButton,
  Toast,
} from "../index";
import fetchApi from "../FetchApi";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./DeleteStudentPage.css";

const DeleteStudentPage = () => {
  const [rollNumber, setRollNumber] = useState("");
  const onChangeRollNumber = (newValue) => {
    setRollNumber(newValue.target.value);
  };
  const [student, setStudent] = useState("");
  const [studentFound, setStudentFound] = useState(false);
  const onSubmit = async () => {
    try {
      const url = `http://localhost:5000/api/admin/getStudents?roll_number=${rollNumber}`;
      const data = await fetchApi(url, "GET");
      const studentData = await data.json();
      setStudent(studentData);
      data.body ? setStudentFound(true) : setStudentFound(false);
    } catch (error) {
      console.log(error);
    }
  };
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const deleteStudent = async () => {
    try {
      const url = `http://localhost:5000/api/admin/deleteStudent?roll_number=${rollNumber}`;
      await fetchApi(url, "DELETE");
      toastNotification("Student Deleted", "success");
      setStudentFound(false);
    } catch (error) {
      toastNotification("Error Occured", "error");
      setStudentFound(false);
    }
  };
  return (
    <MainBox>
      <HeaderChip headerText={"Delete Student"} />
      {studentFound ? (
        <>
          <div className="delete-page-fields">
            <InputField
              inputType={"number"}
              label={"Roll Number:"}
              value={student?.body.roll_number}
              editable={true}
            />
            <InputField
              inputType={"text"}
              label={"Student Name:"}
              value={student?.body.student_name}
              editable={true}
            />
            <InputField
              inputType={"text"}
              label={"Father Name:"}
              value={student?.body.father_name}
              editable={true}
            />
          </div>
          <RedButton buttonText={"Delete"} onSubmitHandler={deleteStudent} />
        </>
      ) : (
        <>
          <div className="search-field">
            <InputField
              inputType={"number"}
              label={"Roll Number:"}
              placeholder={"Enter Roll Number"}
              value={rollNumber}
              onChangeFunction={onChangeRollNumber}
            />
          </div>
          <BlueButton buttonText={"Search"} onSubmitHandler={onSubmit} />
        </>
      )}
      <Toast />
    </MainBox>
  );
};

export default DeleteStudentPage;
