import { React, useState, useEffect } from "react";
import { Navbar, MainBox, HeaderChip, Card,PopUp } from "../index";
import attendanceReportPng from "../../assets/attendanceReport.png";
import feeReportPng from "../../assets/feeReport.png";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";

export default function ReportsPageMain() {
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
      <Navbar role={role} onClickHandler={togglePopUp}/>
      <MainBox>
        <HeaderChip HeaderText={"Reports Management"} />
        <div className="card-container">
          <Card
            title={"Attendance Reports"}
            image={attendanceReportPng}
            path={"./attendanceReports"}
          />
          <Card
            title={"Fee Reports"}
            image={feeReportPng}
            path={"./feeReports"}
          />
        </div>
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
}
