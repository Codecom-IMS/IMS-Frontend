import React from "react";
import { ModuleTitle, MainBox, TeacherForm, Navbar } from "../index";

const AddTeacherPage = () => {
  const api = "http://localhost:5000/api/admin/addTeacher";
  return (
    <>
      <Navbar />
      <MainBox>
        <ModuleTitle headerText={"Add Teacher"} />
        <TeacherForm apiUrl={api} callMethod={"POST"} />
      </MainBox>
    </>
  );
};

export default AddTeacherPage;
