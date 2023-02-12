import React from "react";
import { MainBox, Card, HeaderChip } from "../index";
import addImage from "../../assets/user-add.png";
import editImage from "../../assets/edit.png";
import removeImage from "../../assets/remove-user.png";
const TeacherPage = () => {
  return (
    <MainBox>
      <HeaderChip headerText={"Teacher Management"} />
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
    </MainBox>
  );
};

export default TeacherPage;
