import React from "react";

import { Card, MainBox, ModuleTitle, Navbar } from "../../components";
import teacherImage from "../../assets/teacher.png";
import studentImage from "../../assets/student.png";
import { Outlet } from "react-router-dom";

const MainPage = () => (
  <>
    <Navbar />
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
      <Outlet />
    </MainBox>
  </>
);

export default MainPage;
