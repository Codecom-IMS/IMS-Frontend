import React from "react";
import { MainBox, Card, ModuleTitle, Navbar } from "../index";
import addImage from "../../assets/user-add.png";
import editImage from "../../assets/edit.png";
import removeImage from "../../assets/remove-user.png";

const StudentPage = () => {
  return (
    <>
      <Navbar />
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
      </MainBox>
    </>
  );
};

export default StudentPage;
