import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";
import { ModuleTitle, MainBox,PopUp, TeacherForm, Navbar } from "../index";

const AddTeacherPage = () => {
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
  const api = "http://localhost:5000/api/admin/addTeacher";
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        <ModuleTitle headerText={"Add Teacher"} />
        <TeacherForm apiUrl={api} callMethod={"POST"} />
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
};

export default AddTeacherPage;
