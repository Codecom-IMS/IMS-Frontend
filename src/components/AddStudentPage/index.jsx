import React, { useEffect, useState } from "react";
import "./addStudentPage.css";
import { MainBox, ModuleTitle, Navbar, PopUp, StudentForm } from "../index";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";

const AddStudentPage = () => {
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
  
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp} />
      <MainBox>
        <ModuleTitle headerText={"Add Student"} />
        <StudentForm callMethod={"POST"} buttonTitle={"Submit"} />
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
};

export default AddStudentPage;
