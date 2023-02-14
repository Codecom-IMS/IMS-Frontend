import { React, useState, useEffect } from "react";
import { MainBox, Card, ModuleTitle, Navbar,PopUp } from "../index";
import addImage from "../../assets/user-add.png";
import editImage from "../../assets/edit.png";
import removeImage from "../../assets/remove-user.png";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";


const TeacherPage = () => {
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
        <ModuleTitle headerText={"Teacher Management"} />
        <div className="card-container">
          <Card
            title={"Add Teacher"}
            image={addImage}
            path={"./addTeacherPage"}
          />
          <Card
            title={"Update Teacher"}
            image={editImage}
            path={"./updateTeacherPage"}
          />
          <Card
            title={"Delete Teacher"}
            image={removeImage}
            path={"./deleteTeacherPage"}
          />
        </div>
        {showPopUp && (
          <PopUp messageText={"Are You Sure You Want To Logout?"} onClickBlueButton={togglePopUp} redButtonAction={"logout"} />
        )}
      </MainBox>
    </>
  );
};

export default TeacherPage;
