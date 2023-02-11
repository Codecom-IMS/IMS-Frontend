import React from "react";

import { Card, MainBox, HeaderChip } from "../../components";
import teacherImage from "../../assets/teacher.png";
import studentImage from "../../assets/student.png";

const MainPage = () => (
  <MainBox>
    <HeaderChip headerText={"User Management"} />
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
  </MainBox>
);

export default MainPage;
