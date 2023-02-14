import React from "react";
import inputPicture from "../../assets/InputPicture.png";
import editPicture from "../../assets/EditPicture.png";
import {PopUp,Card,MainBox,HeaderChip,Navbar} from "../index";
import { useState } from "react";
import { userValidator } from "../../services/utils/authorizer/userAuthorizer";
import { useEffect } from "react";
export default function AttendanceManagementPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  };
  const [role, setRole] = useState("");
  useEffect(() => {
    const authrorize = async () => {
      const result = await userValidator();
      setRole(result);
    };
    authrorize();
  }, []);
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        <HeaderChip HeaderText="Attendance Management" />
        <div className="card-container">
          <Card
            image={inputPicture}
            title="Input Attendance"
            path="./inputAttendance"
          />
          <Card
            image={editPicture}
            title="Edit Attendance"
            path="./editAttendance"
          />
        </div>
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
}
