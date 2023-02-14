import React from "react";

import { Card, MainBox, ModuleTitle, Navbar,PopUp } from "..";
import teacherImage from "../../assets/teacher.png";
import studentImage from "../../assets/student.png";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";

const UserManagementMainPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [role, setRole] = useState("")
  useEffect(()=>{
    const authrorize = async () => {
      const result = await adminValidator()
      setRole(result)
    }
    authrorize()
  },[])
  return <>
    <Navbar role={role} onClickHandler={togglePopUp}/>
    <MainBox>
      <ModuleTitle headerText={"User Management"} />
      <div className="card-container">
        <Card
          image={studentImage}
          title={"Student Management"}
          path={"./studentPage"}
        />
        <Card
          image={teacherImage}
          title={"Teacher Management"}
          path={"./teacherPage"}
        />
      </div>
      {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      <Outlet />
    </MainBox>
  </>
};

export default UserManagementMainPage;
