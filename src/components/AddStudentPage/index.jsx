import React from "react";
import "./addStudentPage.css";
import { MainBox, ModuleTitle, Navbar, StudentForm } from "../index";

const AddStudentPage = () => {
  return (
    <>
      <Navbar />
      <MainBox>
        <ModuleTitle headerText={"Add Student"} />
        <StudentForm callMethod={"POST"} buttonTitle={"Submit"} />
      </MainBox>
    </>
  );
};

export default AddStudentPage;
