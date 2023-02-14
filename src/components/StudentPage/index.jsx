import {React,useState,useEffect} from "react";
import { MainBox, Card, ModuleTitle, Navbar,PopUp } from "../index";
import addImage from "../../assets/user-add.png";
import editImage from "../../assets/edit.png";
import removeImage from "../../assets/remove-user.png";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";

const StudentPage = () => {
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
        <ModuleTitle headerText={"Student Management"} />
        <div className="card-container">
          <Card
            title={"Add Student"}
            image={addImage}
            path={"./addStudentPage"}
          />
          <Card
            title={"Update Student"}
            image={editImage}
            path={"./updateStudentPage"}
          />
          <Card
            title={"Delete Student"}
            image={removeImage}
            path={"./deleteStudentPage"}
          />
        </div>
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
};

export default StudentPage;
