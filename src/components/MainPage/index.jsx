import React from "react";

import { Card, MainBox, HeaderChip } from "../../components";
import teacherImage from "../../assets/teacher.png";
import studentImage from "../../assets/student.png";
import { Outlet } from "react-router-dom";

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
    <Outlet />
  </MainBox>
);

export default MainPage;
