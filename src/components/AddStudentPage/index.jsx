import React from "react";
import "./AddStudentPage.css";
import { MainBox, HeaderChip, StudentForm } from "../index";

const AddStudentPage = () => {
  return (
    <MainBox>
      <HeaderChip headerText={"Add Student"} />
      <StudentForm callMethod={"POST"} buttonTitle={"Submit"} />
    </MainBox>
  );
};

export default AddStudentPage;
