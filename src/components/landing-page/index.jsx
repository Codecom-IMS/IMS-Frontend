import React from "react";
import Card from "../card/index";
import adminImage from "../../assets/images/admin.png";
import teacherImage from "../../assets/images/teacher.png";
import HeaderChip from "../HeaderChip";
import MainBox from "../MainBox";
function LandingPage() {
  return (
    <>
      <MainBox>
        <HeaderChip headerText={"Welcome To IMS"} />

        <div className="card-container">
          <Card image={adminImage} title={"Admin Login"} path={"./admin"} />
          <Card
            image={teacherImage}
            title={"Teacher Login"}
            path={"./teacher"}
          />
        </div>
      </MainBox>
    </>
  );
}

export default LandingPage;
